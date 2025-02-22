### Bug report: Screen Flickering on Tab Change
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
