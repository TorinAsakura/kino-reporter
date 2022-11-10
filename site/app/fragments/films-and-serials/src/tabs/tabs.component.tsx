import React           from 'react'
import { FC }          from 'react'
import { useState }    from 'react'

import { GhostButton } from '@ui/button'
import { Layout }      from '@ui/layout'
import { Row }         from '@ui/layout'
import { Text }        from '@ui/text'
import { Hover }       from '@ui/utils'

import { Tab }         from './tabs.interface'
import { TabsProps }   from './tabs.interface'
import { getColor }    from './get-color.helper'

const Tabs: FC<TabsProps> = ({ toggle, selectedTab, setSelectedTab }) => {
  const [tabs] = useState<Tab[]>([
    {
      name: 'Кино',
      id: 'films',
    },
    {
      name: 'Сериалы',
      id: 'serials',
    },
  ])

  return (
    <Row>
      <Layout flexBasis={[16, 16, 0]} />
      {tabs.map(({ name, id }) => (
        <React.Fragment key={id}>
          <Layout>
            <GhostButton
              onClick={() => {
                toggle(false)
                setTimeout(() => {
                  toggle(true)
                })
                setSelectedTab(id)
              }}
            >
              <Hover>
                {(hover, hoverProps) => (
                  <Text
                    color={getColor(hover, id, selectedTab)}
                    fontSize={['xl', 'xl', 'big']}
                    fontFamily='lora'
                    fontWeight='medium'
                    {...hoverProps}
                  >
                    {name}
                  </Text>
                )}
              </Hover>
            </GhostButton>
          </Layout>
          <Layout flexBasis={[8, 8, 12]} />
        </React.Fragment>
      ))}
    </Row>
  )
}

export { Tabs }
