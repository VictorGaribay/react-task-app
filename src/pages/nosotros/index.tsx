import React from 'react'
import Layout from 'src/components/Layout'
import Container from 'src/styles/Containers'

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  return (
    <Layout pageTitle="nosotros">
      <Container>
        <h1>Nosotros</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore minus
          itaque mollitia non odio quas vitae voluptatibus unde fugiat?
          Voluptatum et, repellendus ipsa ex beatae quaerat nihil fugit ab
          eligendi.
        </p>
      </Container>
    </Layout>
  )
}

export default About
