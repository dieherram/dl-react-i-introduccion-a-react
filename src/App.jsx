import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/Header.jsx'
import MyCard from './components/MyCard.jsx'
import Footer from './components/Footer.jsx';

function App() {
  return (
    <>
      <Header titleText="Adopta un perrito" />

      <main>
        <MyCard imgSrc="https://images.unsplash.com/photo-1612502169027-5a379283f9c0" name="Bartolo" description="Lleno de energía y listo para jugar. ¡Dale a Bartolo el hogar amoroso que se merece!" color="success" text="¡Adoptame!" />
        <MyCard imgSrc="https://images.unsplash.com/photo-1517423568366-8b83523034fd" name="Messi" description="Es juguetón, amigable y se lleva bien con niños y otros animales. ¡Haz de Messi parte de tu familia hoy mismo!" color="danger" text="¡Adoptame!" />
        <MyCard imgSrc="https://images.unsplash.com/photo-1505628346881-b72b27e84530" name="Gohan" description="Un perro de tamaño mediano con un corazón gigante, ¡Hazte amigo de Gohan y experimenta un amor incondicional!" color="warning" text="¡Adoptame!" />
        <MyCard imgSrc="https://images.unsplash.com/photo-1600369671738-fa3a43efeced" name="Princesa" description="Es una compañera leal y cariñosa que adota los mimos y los abrazos. ¡Ayuda a Princesa a encontrar su final feliz!" color="info" text="¡Adoptame!" />
      </main>

      <Footer text="Explora nuestra galería de adoptión de perros para encontrar a tu compañero perfecto. Tenemos una variedad de perros con diferentes personalidades y tamaños, todos en busca de un hogar amoroso. Cada imagen captura su escencia única. Adopta un perro y bríndale una segunda oportunidad. Encuentra a tu compañero peludo para siempre." />
    </>
  )
}

export default App
