import { createStore } from 'jotai'

import { PrimaryButton } from '@atlaskit/atlassian-navigation'

import { navigationItems } from '#Components/Navigation'

const mockNavigationStore = createStore()
mockNavigationStore.set(navigationItems, [
  <PrimaryButton>Installed</PrimaryButton>,
  <PrimaryButton>Downloads</PrimaryButton>,
  <PrimaryButton>Workshop</PrimaryButton>,
  <PrimaryButton>Settings</PrimaryButton>,
])

export default mockNavigationStore
