import Head from 'next/head'
import Link from 'next/link'
import {Layout, Row, Col, Avatar, Image, Divider, Typography, Card} from 'antd'

const {Content} = Layout

const {Title} = Typography

export default function Home() {
    return (
        <div className='container'>
            <Head>
                <title>Homepage</title>
            </Head>

            <main>
                <Layout className='layout' style={{minHeight: "100vh"}}>
                    <Content>
                        <Divider orientation='center'>
                            <Typography>
                                <Title>Homepage</Title>
                            </Typography>
                        </Divider>
                        <Row justify='center'>
                            <Avatar size={{xs: 200, sm: 200, md: 400, lg: 400, xl: 400, xxl: 400}}
                                    src={<Image src='/avatar.jpg'/>}/>
                        </Row>
                        <Row justify='center' gutter={[16,16]}>
                            <Col md={6} lg={3} xs={18} type='flex' align='center'>
                                <Link href='/me'>
                                    <Card style={{textAlign: 'center'}} hoverable bordered>
                                        <h1>About me &rarr;</h1>
                                    </Card>
                                </Link>
                            </Col>
                            <Col md={6} lg={3} xs={18} type='flex' align='center'>
                                <Link href='/works'>
                                    <Card style={{textAlign: 'center'}} hoverable bordered>
                                        <h1>My works &rarr;</h1>
                                    </Card>
                                </Link>
                            </Col>
                            <Col md={6} lg={3} xs={18} type='flex' align='center'>
                                <Link href='/contact'>
                                    <Card style={{textAlign: 'center'}} hoverable bordered>
                                        <h1>Contact me &rarr;</h1>
                                    </Card>
                                </Link>
                            </Col>
                        </Row>
                    </Content>
                </Layout>
            </main>
        </div>
    )
}