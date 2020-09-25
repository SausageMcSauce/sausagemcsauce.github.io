function CarmesLogo() {
  return <a href="/carmesinc"><img src="/static/carmesinc/img/carmesinclogo.png" alt="Carmes Inc logo" /></a>;
}

function Disclaimer() {
  return (
    <div>
      <p>Disclaimer: Carmes Inc is a fictional company. All products said to be by them and people said to be members do not exist in real life.</p>
      <p>PreCure Selene, who is mentioned in several pages, was not created by me.</p>
    </div>
  );
}

function UnderConstruction() {
  return (
    <div>
     <h2>This Page is Under Construction!</h2>
     <p>This page is currently under construction. Parts of the page might be broken, missing or incomplete.</p>
    </div>
  )
}

function DreemtronixLogo() {
  return <a href="/carmesinc/dreemtronix"><img src="/static/carmesinc/img/dreemtronix/dreemtronix.png" alt="Carmes Inc logo" /></a>;
}

function NewsNav() {
  return <nav class="newsnav">
    <ul>
      <li><strong>Carmes News: </strong></li>
      <li><a href="/carmesinc/news">Home</a></li>
      <li><a href="articles.html">Articles</a></li>
    </ul>
  </nav>;
}