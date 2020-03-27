import React from 'react'
import renderer from 'react-test-renderer'
import { cleanup, render } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'

import CookieBanner from './CookieBanner'

expect.extend(toHaveNoViolations)
afterEach(cleanup)

test('CookieBanner is being rendered', () => {
  const component = renderer.create(<CookieBanner text="cacca" />)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('CookieBanner is accessible', async () => {
  const { container } = render(<CookieBanner text="cacca" />)
  const results = await axe(container)

  expect(results).toHaveNoViolations()
})
