# Feedback

## Table of Contents

- [Documentation](#docs)
  - [Animated Tabs](#animated-tabs)
  - [Hook Coverage](#hook-coverage)
  - [Reset Property Documentation](#reset-property-documentation)
- [API](#api)
  - [TabList asChild Concept](#tablist-aschild-concept-differs-from-tabtrigger--link)
- [Bugs](#bugs)
  - [Screen Re-Rendering Issues](#screen-re-rendering-issues)
    - [With Stacks](#with-stacks)
    - [Without Stacks](#without-stacks)
  - [Screen Flickering](#screen-flickering)
- [Resources](#resources)
  - [Gif 1](#gif-1)
  - [Gif 2](#gif-2)
  - [Gif 3](#gif-3)
  - [Gif 4](#gif-4)

## Docs

The Expo Router UI docs are useful, but they could be clearer and more complete. Here are some areas that could use improvement:

### Animated Tabs

Given its potential appeal, providing a dedicated section on tab animations, complete with examples and explanations, would be valuable to the community.

- While the documentation mentions tab animations, there are no concrete examples demonstrating how to implement them.

- After investigating the source code, I was able to determine how animations work but am still unsure of what best practices you suggest.

### Hook Coverage

My focus has been on the component-based approach, so I have not personally tested the hooks yet but:

- The documentation mentions hooks as a concept but does not provide any examples of how to use them.
- Including examples would help users understand their practical applications and when to use them over components.

### Reset Property Documentation

The reset property appears to be involved in a few bugs (see own section)

- The explanation of the `reset` property is incomplete and lacks detail.

- There are missing options in the guide section compared to the reference section, such as `onFocus`.

- Without a thorough breakdown, users may struggle to understand the full range of reset behaviors.

## API

### TabList asChild concept differs from TabTrigger / Link

I've not used `asChild` prop for other expo-router/ui components than `TabList` and `TabTrigger`, but the current `asChild` implementation creates an inconsistent mental model across these components. Unlike `TabTrigger`, which can be fully replaced with a custom component, `TabList` still requires its `TabTrigger` children to be rendered by the same component, even when using `asChild`. I understand that type of component and purposes are fundamentally different, but this may lead to confusion.

For example...

✅ This is possible for a `TabTrigger`

```
<Tabs>
  <TabSlot />
  <TabList>
    <TabTrigger name="foo" href="/" asChild>
    	<MyCustomTabButton />
    </TabTrigger>
  </TabList>
</Tabs>
```

✅ This is possible for a `Link`

```
<Link href="/" asChild>
   <MyCustomPressable />
</Link>
```

✅ This works

```
<Tabs>
  <TabSlot />
  <TabList asChild>
  	<MyCustomTabListLayout>
  		<TabTrigger name="foo" href="/">
  			Foo
  		</TabTrigger>
  	</MyCustomTabListLayout>
  </TabList>
</Tabs>
```

❌ But this is not possible

```
<Tabs>
  <TabSlot />
  <TabList asChild>
    <MyCustomTabListContainingPrimaryTabTriggers />
  </TabList>
</Tabs>
```

I understand evolving the TabList implementation to support full component replacement may be complex in it's current state due to it's tight relationship to the TabTriggers, but perhaps consider

- Using distinct prop names that better communicate the different composition capabilities (e.g., `asWrapper` for `TabList`), or
- Providing clear documentation that explicitly outlines these different composition boundaries and the reasoning behind them. This would strengthen the predictability of the component API and better align with developer expectations.

## Bugs

### Screen Re-rendering Issues

There are inconsistencies in how screens stabilize (stop re-rendering) when using stacks versus not using them. None of which fits the default behavior of "default" Expo Router / React Navigation.

#### With Stacks

The initial stack screen renders twice before stabilizing. (see gif 1)

Navigation with custom tabs and stacks results in weird visual and functional behaviors (see gif 2)

- Adding `reset="never"` improves the results

#### Without Stacks

The screen never stabilizes, leading to continuous re-renders. (see gif 3)

Related issue:
https://github.com/expo/expo/issues/35117

### Screen Flickering

When switching tabs, the screen flickers briefly because the rendered screen does not initially take up 100% of the height. This is highly noticeable as content gets misplaced momentarily. This issue does not happen for every tab change, but often enough for it to become annoying. (see gif 4)

Related issue:
https://github.com/expo/expo/issues/35116

## Resources

#### Gif 1

#### Gif 2

#### Gif 3

#### Gif 4
