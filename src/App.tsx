import { Post, PostType } from "./components/Post";
import { Header } from "./components/Header";

import styles from "./App.module.css";
import "./global.css";
import { Sidebar } from "./components/Sidebar";

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/diego-lanca.png",
      name: "Diego Lança de Oliveira",
      role: "Full-stack Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2024-01-23 08:13:22"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/NicolasOliveira100.png",
      name: "Nicolas Antunes",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Salve pessoal 👋" },
      {
        type: "paragraph",
        content:
          "Fiz um projeto novo, e gostaria que alguém desse uma olhada! O nome do projeto é LiraBooks 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2024-01-19 20:00:00"),
  },
];

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                post={post}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}
