import { Html, Body, Container, Text, Link, Preview, Tailwind } from "@react-email/components"
const WelcomeTemplate = ({name}: {name: string}) => {
  return (
    <Html>
        <Preview>Welcome aboard!</Preview>
    <Tailwind>
        <Body className="bg-white">
            <Container>
                <Text className="font-bold text-2xl">Hello {name}</Text>
                <Link href="https://codewithmosh.com">www.codewithmosh.com</Link>
            </Container>
        </Body>
    </Tailwind>
    </Html>
  )
}

export default WelcomeTemplate
