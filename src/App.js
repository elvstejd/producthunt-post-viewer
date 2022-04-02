import { Button, Card, Drawer, Image, Kbd, Paper, Stack, Text, Title, useMantineTheme } from "@mantine/core";
import { useState } from "react";
import { createRef, useMemo } from "react";
import TinderCard from "react-tinder-card";
import { savePost, getPosts } from "./services/local-db";

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
  const [drawerOpened, setDrawerOpened] = useState(true);

  const cardRefs = useMemo(
    () =>
      Array(data.length)
        .fill(0)
        .map((i) => createRef()),
    []
  );

  function save(post) {
    savePost(post);
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
      <Drawer
        position='right'
        opened={drawerOpened}
        size='30rem'
        onClose={() => setDrawerOpened(false)}
        styles={{
          drawer: {
            overflow: 'auto'
          }
        }}

      >
        <Title order={4} style={{ marginLeft: theme.spacing.sm }}>Your Saved Posts</Title>
        <Stack style={{ padding: theme.spacing.sm }}>
          {getPosts().map(post => (
            <>
              <Paper
                shadow='sm'
                withBorder
                style={{ display: 'flex', overflow: 'hidden' }}
                sx={(theme) => ({
                  '&:hover': {
                    backgroundColor: theme.colors.gray[0],
                    cursor: 'pointer'
                  }
                })}
              >
                <Card.Section>
                  <Image src={post.media} />
                </Card.Section>
                <div style={{ padding: theme.spacing.sm }}>
                  <Text weight='bold' color='gray'>{post.name}</Text>
                  <Text>{post.description}</Text>
                </div>
              </Paper>
            </>
          ))}
        </Stack>
      </Drawer>
    </div>
  );
}

export default App;
