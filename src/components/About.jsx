import "../css/About.css";
import ReactMarkdown from "react-markdown";

const description = `
This application allows you to explore the world of Pokémon in a simple, visual, and intuitive way.

All the information is retrieved in real time from the PokéAPI, ensuring that the data is always up to date.

When you enter the app, you'll see a list of Pokémon that you can browse through easily. There's also a search bar that lets you quickly find any Pokémon by name.

Additionally, if you click on a specific Pokémon, you'll be taken to a separate page with more detailed information: its official image, types, abilities, and other relevant data.

It's a convenient way to learn more about each Pokémon without leaving the app.

The interface is designed so that anyone can use it without trouble, whether on a computer or a mobile device. Whether you're just curious or looking for specific information, this tool makes discovering Pokémon a smooth and enjoyable experience.
`;

export default function About() {
  return (
    <div className="about-info">
      <ReactMarkdown>{description}</ReactMarkdown>
    </div>
  );
}
