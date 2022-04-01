import { Button, Card, Image, Kbd, Text, Title, useMantineTheme } from "@mantine/core";
// import { useHotkeys } from "@mantine/hooks";
import { createRef } from "react";
import { useMemo } from "react";
import TinderCard from "react-tinder-card";

const data = [
  {
    media: 'https://ph-files.imgix.net/d86112a8-f7b0-4bec-8dea-284ef68eba7a.gif?auto=compress&fm=webp&codec=mozjpeg&cs=strip&w=60&h=60&fit=max&frame=1&dpr=2&bg=0fff',
    name: 'Unicorn Warrior',
    description: '150+ cognitive biases & viral marketing frameworks'
  },
  {
    media: 'https://ph-files.imgix.net/d86112a8-f7b0-4bec-8dea-284ef68eba7a.gif?auto=compress&fm=webp&codec=mozjpeg&cs=strip&w=60&h=60&fit=max&frame=1&dpr=2&bg=0fff',
    name: 'Unicorn Warrior',
    description: '150+ cognitive biases & viral marketing frameworks'
  },
  {
    media: 'https://ph-files.imgix.net/d86112a8-f7b0-4bec-8dea-284ef68eba7a.gif?auto=compress&fm=webp&codec=mozjpeg&cs=strip&w=60&h=60&fit=max&frame=1&dpr=2&bg=0fff',
    name: 'Unicorn Warrior',
    description: '150+ cognitive biases & viral marketing frameworks'
  }
]

function App() {
  const theme = useMantineTheme();

  const cardRefs = useMemo(
    () =>
      Array(data.length)
        .fill(0)
        .map((i) => createRef()),
    []
  )

  // useHotkeys([
  //   ['ArrowRight',]
  // ])

  function save(post) {
    console.log(post);
  }

  // async function remoteSwipe(dir) {
  //   await cardRefs[currentIndex].current.swipe(dir);
  // }

  return (
    <div className="base">
      <Title order={3} style={{ marginBottom: theme.spacing.md }}>Product Hunt Quick Viewer</Title>
      <div className="card-container">
        <div className="btn-container" style={{ marginBottom: theme.spacing.sm }}>
          <Button leftIcon={<Kbd>←</Kbd>} variant="subtle">Skip</Button>
          <Button rightIcon={<Kbd>→</Kbd>} variant="subtle">Save</Button>
        </div>
        {data.map((post, index) => (
          <TinderCard
            ref={cardRefs[index]}
            className="swipe"
            preventSwipe={['up', 'down']}
            onSwipe={(direction) => direction === 'right' && save(post)}
          >
            <Card shadow='sm'>
              <Card.Section>
                <Image src={post.media} />
              </Card.Section>
              <Text style={{ marginTop: theme.spacing.sm }}>{post.name}</Text>
              <Text size="sm" color='gray'>{post.description}</Text>
            </Card>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default App;
