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
                        <Row justify='center'>
                            <div className='grid'>
                                <Link href='/me'>
                                    <a className='card'>
                                        <h1>About me &rarr;</h1>
                                    </a>
                                </Link>
                                <Link href='/works'>
                                    <a className='card'>
                                        <h1>My works &rarr;</h1>
                                    </a>
                                </Link>
                                <Link href='/contact'>
                                    <a className='card'>
                                        <h1>Contact me &rarr;</h1>
                                    </a>
                                </Link>
                            </div>
                        </Row>
                    </Content>
                </Layout>
            </main>

            <style jsx>{`

              a {
                color: inherit;
                text-decoration: none;
              }

              .grid {
                display: flex;
                align-items: center;
                justify-content: center;
                flex-wrap: wrap;

                max-width: 800px;
                margin-top: 3rem;
              }

              .card {
                margin: 1rem;
                flex-basis: 45%;
                padding: 1.5rem;
                text-align: center;
                color: inherit;
                text-decoration: none;
                border: 1px solid #c8a6ec;
                border-radius: 10px;
                transition: color 0.15s ease, border-color 0.15s ease;
              }

              .card:hover,
              .card:focus,
              .card:active {
                color: #0070f3;
                border-color: #0070f3;
              }

              .card h3 {
                margin: 0 0 1rem 0;
                font-size: 1.5rem;
              }

              .card p {
                margin: 0;
                font-size: 1.25rem;
                line-height: 1.5;
              }

              .logo {
                height: 1em;
              }

              @media (max-width: 600px) {
                .grid {
                  width: 100%;
                  flex-direction: column;
                }
              }
            `}</style>
        </div>
    )
}