import '../assets/css/master.css';

import Encabezado from './Encabezado/Encabezado';
import Banner from './Banner';
import Productos from './Productos';
import Footer from './Footer';

function Web() {
  return (
    <div className="App">

      <Encabezado/>
      <Banner/>
      <Productos/>
      <Footer />

    </div>
  );
}

export default Web;
