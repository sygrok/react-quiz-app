import logoImg from "../assets/quiz-logo.png";

export default function Header() {
  return (
    <header>
      <img src={logoImg} />
      <h1>10 Kasım'a Özel</h1>
      <hr />
      <h1>Atatürk'ü Ne Kadar Tanıyorsunuz?</h1>
      <h2>Ulu Önder Gazi Mustafa Kemal Atatürk'ün Anısına</h2>
      <h2>Berkay Anduv Tarafından Oluşturulmuştur.</h2>
    </header>
  );
}
