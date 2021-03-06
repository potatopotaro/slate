/** @jsx h */

import h from '../../helpers/h'

export const schema = {
  inlines: {
    link: {
      parent: { kinds: ['block'] },
    }
  }
}

export const input = (
  <value>
    <document>
      <paragraph>
        <link><link>one</link></link>
      </paragraph>
    </document>
  </value>
)

export const output = (
  <value>
    <document>
      <paragraph />
    </document>
  </value>
)
