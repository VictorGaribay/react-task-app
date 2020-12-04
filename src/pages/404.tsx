import React from 'react'
import AppLink from 'src/components/AppLink'
import Layout from 'src/components/Layout'
import Container from 'src/styles/Containers'
import { Paragraph, Title } from 'src/styles/TextElement'

export default function NotFound(): JSX.Element {
  return (
    <Layout pageTitle="Not found" description="Error 404">
      <Container>
        <Title>Not found 404</Title>
        <Paragraph>Sorry! Not found page</Paragraph>
        <AppLink href="/" label="Go to home" />
      </Container>
    </Layout>
  )
}
