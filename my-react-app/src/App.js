const greeting = "Hello!";
const statement = "I'm learning React!";
const one = 1;
const two = 2;

const object = {
  name: "Nicole",
  location: "OKC",
  favoriteActivities: ["yoga", "kickboxing", "cycling", "reading"],
};

const cat = {
  color: "all the colors!",
  numberOfKittens: 6,
  image:
    "https://bestfriends.org/sites/default/files/inline-images/Foster-Agave-1-byAnnika-Harley.jpg",
};

function App() {
  return (
    <div className="App">
      <h1>
        {greeting} {statement}
      </h1>
      <p>
        The sum of 1 + 2 is {one + two}. Subtracting 2 - 1 gives {two - one}. If
        you multiply 1 times 2, you get {one * two}. If you divide 2 / 1, you
        get {two / one}.
      </p>
      <p>
        My name is {object.name} and I live in {object.location}. I like:
        <ul>
          <li>{object.favoriteActivities[0]}</li>
          <li>{object.favoriteActivities[1]}</li>
          <li>{object.favoriteActivities[2]}</li>
          <li>{object.favoriteActivities[3]}</li>
        </ul>
      </p>
      <figure>
        <img src={cat.image} alt="cat-img"></img>
        <figcaption>
          This photo has {cat.numberOfKittens} cats with {cat.color}
        </figcaption>
      </figure>
      {/*It's a secret*/}
    </div>
  );
}

export default App;
