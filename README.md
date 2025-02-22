### This repo serves to report two different bugs

1. [expo-router/ui] Screen Flickering on Tab Change (https://github.com/expo/expo/issues/35116)
2. [expo-router/ui] - Re-render twice before stabilizing (https://github.com/expo/expo/issues/35117)

Scroll down to the issue you are investigating ;)

### 1). Bug report: Screen Flickering on Tab Change
When switching tabs, the screen flickers briefly because the rendered screen does not initially take up 100% of the height. This is highly noticeable as content gets misplaced momentarily. This issue does not happen for every tab change.

- iOS - happens a lot, easy to reproduce by switching tabs on simulator and on device
- Android - have only tried on emulator. There is an initial flicker when the screen mounts the first time, otherwise seems to work.

**Repro.**
- Install the project
- Run it on an iOS device or simulator
- Press around on the tabs randomly until the problem appears

**Observations**
To track down the issue, I added borders to all relevant components:

- ✅ `<Tabs />` maintains height
- ✅ `<TabSlot />` maintains height
- ❌ The rendered screen does not maintain height (causing the flicker)


![Image](https://github.com/user-attachments/assets/454b9052-9b03-4118-b89d-e90811d44011)

![Image](https://github.com/user-attachments/assets/2c08c56a-b852-4bc0-99eb-fc70b5cd712d)

### 2). Bug report: Re-render twice before stabilizing
When switching between tabs, each tab’s index screen appears to re-render twice before stabilizing. I tested this by printing Date.now() on each screen and observed that the timestamp changes between the first and second tab interactions. The expected behavior would be for the value to remain stable from the initial mount.

Additionally, I added a console.log, which consistently triggers when revisiting a tab for the second time. However, after the third visit, the behavior stabilizes, and the issue no longer occurs.

**Repro.**
- Install the project
- Run it on a device or simulator
- See the gif on how you can reproduce the problem

![Image](https://github.com/user-attachments/assets/a4e634e8-526e-46bf-8326-8d18633e20b2)

- Stack1 initial value ends in: 64 ✅
- Stack1 press value ends in: 92 ❌ (should still be 64)
- Stack2 press value ends in: 99 ✅
- Stack3 press value ends in: 37 ✅
- Stack2 press value ends in: 18 ❌ (should still be 99)
- Stack3 press value ends in: 02 ❌ (should still be 37)
