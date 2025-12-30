import {
  Heading,
  Text,
  Button,
  Column,
  Schema,
  Meta,
} from "@once-ui-system/core";
import { home, person, baseURL } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default function Home() {
  const bookingLink = home.bookingLink || "https://cal.com/adaminds/discovery";
  return (
    <>
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`${baseURL}${home.image}`}
        author={{
          name: person.name,
          url: `${baseURL}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      
      {/* Full-screen Hero with Video */}
      <Column
        as="section"
        fillWidth
        horizontal="center"
        vertical="center"
        style={{ position: "relative", height: "100vh" }}
      >
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
        >
          <source src="/images/projects/project-01/video-01.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1,
          }}
        />
      </Column>

      {/* Problem Alignment Section */}
      <Column
        as="section"
        fillWidth
        paddingY="xl"
        paddingX="l"
        horizontal="center"
        style={{ backgroundColor: "var(--page-background)" }}
      >
        <Column maxWidth="m" gap="l" horizontal="center">
          <Heading
            variant="display-strong-m"
            align="center"
            style={{ color: "var(--neutral-on-background-strong)" }}
          >
            This is probably you
          </Heading>
          <Column
            gap="m"
            fillWidth
            style={{ marginTop: "var(--spacing-24)", maxWidth: "600px" }}
          >
            <Text
              variant="body-default-l"
              style={{ color: "var(--neutral-on-background-medium)" }}
            >
              • You're spending too much time on manual outreach, and it's not scaling
            </Text>
            <Text
              variant="body-default-l"
              style={{ color: "var(--neutral-on-background-medium)" }}
            >
              • Your sales pipeline is inconsistent—some months are feast, others are famine
            </Text>
            <Text
              variant="body-default-l"
              style={{ color: "var(--neutral-on-background-medium)" }}
            >
              • You know outbound works, but you don't have the time or expertise to build the system
            </Text>
            <Text
              variant="body-default-l"
              style={{ color: "var(--neutral-on-background-medium)" }}
            >
              • You're tired of hiring agencies that overpromise and underdeliver
            </Text>
            <Text
              variant="body-default-l"
              style={{ color: "var(--neutral-on-background-medium)" }}
            >
              • You want a system, not a service—something that runs on its own
            </Text>
          </Column>
        </Column>
      </Column>

      {/* POV Section - Systems > Services */}
      <Column
        as="section"
        fillWidth
        paddingY="xl"
        paddingX="l"
        horizontal="center"
        style={{ backgroundColor: "var(--neutral-background-weak)" }}
      >
        <Column maxWidth="m" gap="l">
          <Heading
            variant="display-strong-m"
            style={{ color: "var(--neutral-on-background-strong)" }}
          >
            Systems, not services
          </Heading>
          <Column gap="m" style={{ marginTop: "var(--spacing-16)" }}>
            <Text
              variant="body-default-l"
              style={{ color: "var(--neutral-on-background-medium)", lineHeight: "1.7" }}
            >
              Most agencies sell you a service. They do the work for you, charge you monthly, and when you stop paying, everything stops.
            </Text>
            <Text
              variant="body-default-l"
              style={{ color: "var(--neutral-on-background-medium)", lineHeight: "1.7" }}
            >
              We build systems. Systems that run independently, fill your calendar with qualified calls, and scale with your business.
            </Text>
            <Text
              variant="body-default-l"
              style={{ color: "var(--neutral-on-background-medium)", lineHeight: "1.7" }}
            >
              In 90 days, we audit your offer, build your outbound engine, and hand you the keys. After that, you own it. Most clients go from scattered outreach to 12–24 qualified booked calls per month like clockwork.
            </Text>
          </Column>
        </Column>
      </Column>

      {/* Founder Credibility Section */}
      <Column
        as="section"
        fillWidth
        paddingY="xl"
        paddingX="l"
        horizontal="center"
        style={{ backgroundColor: "var(--page-background)" }}
      >
        <Column maxWidth="m" gap="m">
          <Heading
            variant="display-strong-m"
            style={{ color: "var(--neutral-on-background-strong)" }}
          >
            About me
          </Heading>
          <Column gap="m" style={{ marginTop: "var(--spacing-16)" }}>
            <Text
              variant="body-default-l"
              style={{ color: "var(--neutral-on-background-medium)", lineHeight: "1.7" }}
            >
              I'm Adrian, and I've been building outbound systems for software companies for the past few years. I've worked with founders who've gone from zero outbound to 30+ booked calls per month.
            </Text>
            <Text
              variant="body-default-l"
              style={{ color: "var(--neutral-on-background-medium)", lineHeight: "1.7" }}
            >
              I don't do marketing language. I build systems that work. If you want to see if we're a fit, book a call below.
            </Text>
          </Column>
        </Column>
      </Column>

      {/* Call Breakdown Section */}
      <Column
        as="section"
        fillWidth
        paddingY="xl"
        paddingX="l"
        horizontal="center"
        style={{ backgroundColor: "var(--neutral-background-weak)" }}
      >
        <Column maxWidth="m" gap="l">
          <Heading
            variant="display-strong-m"
            style={{ color: "var(--neutral-on-background-strong)" }}
          >
            What happens on the call
          </Heading>
          <Column gap="m" style={{ marginTop: "var(--spacing-16)" }}>
            <Text
              variant="body-default-l"
              style={{ color: "var(--neutral-on-background-medium)", lineHeight: "1.7" }}
            >
              We'll spend 30 minutes understanding your business, your offer, and your current situation. I'll share how we've helped similar companies build consistent pipelines, and we'll see if we're a fit.
            </Text>
            <Text
              variant="body-default-l"
              style={{ color: "var(--neutral-on-background-medium)", lineHeight: "1.7" }}
            >
              No pitch, no pressure. Just a conversation between two people trying to figure out if we can help each other.
            </Text>
          </Column>
        </Column>
      </Column>

      {/* Final CTA Section */}
      <Column
        as="section"
        fillWidth
        paddingY="xl"
        paddingX="l"
        horizontal="center"
        style={{ backgroundColor: "var(--page-background)" }}
      >
        <Column
          maxWidth="m"
          gap="l"
          horizontal="center"
          align="center"
          style={{ marginTop: "var(--spacing-32)" }}
        >
          <Heading
            variant="display-strong-m"
            align="center"
            style={{ color: "var(--neutral-on-background-strong)" }}
          >
            Ready to fill your pipeline?
          </Heading>
          <Text
            variant="body-default-l"
            align="center"
            style={{ color: "var(--neutral-on-background-medium)", maxWidth: "500px" }}
          >
            Book your free discovery call and discover how you can unlock 12–24 qualified appointments every month.
          </Text>
          <Button
            href={bookingLink}
            variant="primary"
            size="l"
            weight="strong"
            data-border="rounded"
            style={{ marginTop: "var(--spacing-16)" }}
          >
            Book a call
          </Button>
        </Column>
      </Column>
    </>
  );
}
