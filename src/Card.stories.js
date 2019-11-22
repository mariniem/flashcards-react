import React from 'react'
import Card from './Card'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

export default {
  title: 'Button',
  decorators: [withKnobs],
}

export const standard = () => (
  <Card
    question={text('Question', 'Question')}
    answer={text('Answer', 'Here my Answer')}
    toggleBookmarked={action('toggleBookmarked')}
    isBookmarked={boolean('isBookmarked', false)}
  />
)
