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

const Tabs: FC<TabsProps> = ({ selectedTab, setSelectedTab }) => {
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
      {tabs.map(({ name, id }, index) => (
        <React.Fragment key={id}>
          <Layout>
            <GhostButton onClick={() => setSelectedTab(id)}>
              <Hover>
                {(hover, hoverProps) => (
                  <Text
                    color={getColor(hover, id, selectedTab)}
                    fontSize='big'
                    fontFamily='lora'
                    {...hoverProps}
                  >
                    {name}
                  </Text>
                )}
              </Hover>
            </GhostButton>
          </Layout>
          <Layout flexBasis={index === 0 ? 12 : 0} />
        </React.Fragment>
      ))}
    </Row>
  )
}

export { Tabs }
