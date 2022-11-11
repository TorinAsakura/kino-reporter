import React           from 'react'
import { FC }          from 'react'

import { Button }      from '@ui/button'
import { VkIcon }      from '@ui/icons'
import { TwitterIcon } from '@ui/icons'
import { YouTubeIcon } from '@ui/icons'
import { Row }         from '@ui/layout'
import { Layout }      from '@ui/layout'
import { Link }        from '@ui/link'

const SocialLinks: FC = () => (
  <Row justifyContent={['center', 'center', 'flex-start']}>
    <Layout width={48} height={48}>
      <Link href='/'>
        <Button size='fullRounded' variant='socialNav'>
          <VkIcon width={24} height={24} />
        </Button>
      </Link>
    </Layout>
    <Layout flexBasis={[24, 24, 28]} />
    <Layout width={48} height={48}>
      <Link href='/'>
        <Button size='fullRounded' variant='socialNav'>
          <TwitterIcon width={24} height={24} />
        </Button>
      </Link>
    </Layout>
    <Layout flexBasis={[24, 24, 28]} />
    <Layout width={48} height={48}>
      <Link href='/'>
        <Button size='fullRounded' variant='socialNav'>
          <YouTubeIcon width={24} height={24} />
        </Button>
      </Link>
    </Layout>
  </Row>
)

export { SocialLinks }
