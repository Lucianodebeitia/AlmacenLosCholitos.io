let imagenes = ['img-productos-2/img-1.png','img-productos-2/img-1.png', 'img-productos-2/img-2.png', 'img-productos-2/img-3.png',];
let cont = 0;

function cambiarImagen() {
    cont = (cont + 1) % imagenes.length;
    document.getElementById('carrusel-img').src = imagenes[cont];
}


function avanzarImagen() {
    cont = (cont + 1) % imagenes.length;
    document.getElementById('carrusel-img').src = imagenes[cont];
}

function retrocederImagen() {
    cont = (cont - 1 + imagenes.length) % imagenes.length;
    document.getElementById('carrusel-img').src = imagenes[cont];
}

document.addEventListener('DOMContentLoaded', () => {
    setInterval(cambiarImagen, 5000); // Cambia la imagen cada 3 segundos

    document.querySelector('.next').addEventListener('click', avanzarImagen);
    document.querySelector('.back').addEventListener('click', retrocederImagen);
});


// ? Efecto al 'input search'


document.addEventListener('DOMContentLoaded', () => {
    const searchIcon = document.getElementById('search-icon');
    const searchInput = document.getElementById('search-input');

    // Añade un event listener al ícono de búsqueda
    searchIcon.addEventListener('click', () => {
        searchInput.classList.toggle('active');
        searchInput.focus(); // Opcional: para enfocar el input cuando se muestra
    });
});


// ? Funcion para buscar productos en el input.


// !




document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');

    // Obtén todos los productos desde el inicio, no solo los visibles
    const allProducts = Array.from(document.querySelectorAll('.cards'));

    searchInput.addEventListener('input', function() {
        const filter = searchInput.value.toLowerCase();
        searchResults.innerHTML = ''; // Limpiar resultados anteriores

        if (filter) {
            // Filtrar todos los productos basados en el input de búsqueda
            const filteredProducts = allProducts.filter(product => {
                const productName = product.querySelector('h2').textContent.toLowerCase();
                return productName.includes(filter);
            });

            filteredProducts.forEach(product => {
                const productName = product.querySelector('h2').textContent;
                const productImg = product.querySelector('img').src;

                const resultItem = document.createElement('div');
                resultItem.classList.add('result-item');

                const img = document.createElement('img');
                img.src = productImg;
                img.alt = productName;

                const name = document.createElement('span');
                name.textContent = productName;

                resultItem.appendChild(img);
                resultItem.appendChild(name);
                resultItem.addEventListener('click', function() {
                    searchInput.value = productName;
                    searchResults.innerHTML = '';

                    // Encontrar la card correspondiente y desplazar hacia ella
                    const card = allProducts.find(card => {
                        return card.querySelector('h2').textContent === productName;
                    });

                    if (card) {
                        card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                });

                searchResults.appendChild(resultItem);
            });

            searchResults.style.display = filteredProducts.length ? 'block' : 'none';
        } else {
            searchResults.style.display = 'none';
        }
    });

    document.addEventListener('click', function(event) {
        if (!searchResults.contains(event.target) && event.target !== searchInput) {
            searchResults.style.display = 'none';
        }
    });
});



// !

document.addEventListener('DOMContentLoaded', function() {
    const images = [
        { img: 'productos_cards/roquefort.jpg', title: 'QUESO AZUL', desc: 'Intensamente cremoso y con un sabor distintivo, el queso azul es perfecto para añadir un toque especial a tus platos. ¡Ideal para los amantes de los sabores fuertes!' },
        // { img: 'productos_cards/mdp2.jpg', title: 'QUESO MAR DEL PLATA', desc: 'Suave y cremoso, este queso ofrece un sabor delicado con un toque ligeramente salado. Perfecto para acompañar tus platos favoritos o disfrutarlo solo. Ideal para los amantes del queso que buscan una opción versátil y deliciosa.' },
        { img: 'productos_cards/provolone.jpg', title: 'QUESO PROVOLONE', desc: 'Delicioso y versátil, el provolone se destaca por su sabor suave y ligeramente picante. Ideal para fundir, gratinar o disfrutar en rebanadas. Su textura firme y sabor característico lo convierten en un excelente complemento para diversas recetas.' },
        { img: 'productos_cards/parmesano.jpg', title: 'QUESO PARMESANO', desc: 'Queso firme con un sabor suave y ligeramente picante. Perfecto para fundir o disfrutar en rebanadas. Ideal para realzar tus platos con un toque sabroso.' },
        { img: 'productos_cards/criollo.jpg', title: 'QUESO CRIOLLO', desc: 'Suave y cremoso, el queso Criollo ofrece un sabor delicado y ligeramente salado. Ideal para acompañar comidas caseras y disfrutar en bocadillos. Perfecto para quienes buscan un queso de sabor auténtico y versátil.' },
        { img: 'productos_cards/mantecoso.jpg', title: 'QUESO MANTECOSO', desc: 'Queso suave y cremoso con un sabor rico y ligeramente salado. Perfecto para untar, fundir o disfrutar en bocadillos. Ideal para realzar cualquier plato con su textura untuosa y sabor delicado.' },
        { img: 'productos_cards/cabra2.jpg', title: 'QUESO DE CABRA', desc: 'Suave y cremoso, con un sabor distintivo y ligeramente ácido. Ideal para ensaladas, bocadillos o como complemento en diversos platos. Perfecto para quienes buscan un queso con carácter y frescura.' },
        { img: 'productos_cards/cabrales.jpg', title: 'QUESO CABRALES', desc: 'Queso azul con un sabor intenso y picante, y una textura cremosa. Ideal para quienes disfrutan de quesos fuertes y sabrosos, perfecto para acompañar con vinos y pan.' },
        { img: 'productos_cards/fortina2.jgp.png', title: 'QUESO FONTINA', desc: 'Queso italiano de pasta semidura, con sabor robusto y ligeramente picante. Ideal para fundir en platos como fondues y gratinados.' },
        { img: 'productos_cards/goya.jpg', title: 'QUESO GOYA', desc: 'Queso semiduro con un sabor suave y ligeramente salado. Ideal para fundir, en bocadillos o en tablas de queso. Su textura firme y sabor delicado lo hace muy versátil.' },
        { img: 'productos_cards/cheddarHorma.jpg', title: 'QUESO CHEDDAR', desc: 'Queso de textura firme y sabor pronunciado. Su color anaranjado y su sabor fuerte lo hacen ideal para hamburguesas, nachos y salsas.' },
        { img: 'productos_cards/cheddarFeta.jpg', title: 'QUESO CHEDDAR FETA', desc: 'Queso de textura suave y quebradiza, con un sabor salado y ligeramente ácido. Ideal para ensaladas, aperitivos y platos mediterráneos.' },
        // Añade más imágenes, títulos y descripciones según sea necesario...
    ];

    let currentIndex = 0;

    const imgElement = document.getElementById('card-img');
    const titleElement = document.getElementById('card-title');
    const descElement = document.getElementById('card-desc');

    function updateCard(index) {
        imgElement.src = images[index].img;
        titleElement.textContent = images[index].title;
        descElement.textContent = images[index].desc;
    }

    // Inicializar la card con el primer elemento
    updateCard(currentIndex);

    // Cambiar el contenido cada tres segundos
    setInterval(function() {
        currentIndex = (currentIndex + 1) % images.length;
        updateCard(currentIndex);
    }, 2000);
});


// ! Parte dos del "carrusel en las cards."



document.addEventListener('DOMContentLoaded', function() {
    const images = [
        { img: 'productos_cards/jamon-crudo2.jpg', title: 'JAMON CRUDO', desc: 'Delicadamente curado y lleno de sabor, el jamón crudo es una delicia gourmet que se derrite en la boca. ¡Perfecto para acompañar tus comidas y aperitivos!' },
        { img: 'productos_cards/salame-tandil.jpg', title: 'SALAME DE TANDIL', desc: 'Delicioso y versátil, el provolone se destaca por su sabor suave y ligeramente picante. Ideal para fundir, gratinar o disfrutar en rebanadas. Su textura firme y sabor característico lo convierten en un excelente complemento para diversas recetas.' },
        { img: 'productos_cards/mortadela2.jpg', title: 'MORTADELA', desc: 'Embutido italiano elaborado con carne de cerdo finamente picada. Tiene un sabor suave y aromático, con especias y, a veces, pistachos. Ideal para sándwiches, antipastos y aperitivos.' },
        { img: 'productos_cards/pastron.jpg', title: 'PASTRON NATURAL', desc: 'Fiambre de carne de res curada y especiada, típicamente ahumada. De sabor intenso y jugoso, es popular en sándwiches y platos deli.' },
        { img: 'productos_cards/lomoAhumado.jpg', title: 'LOMO AHUMADO', desc: 'Fiambre de lomo de cerdo curado y ahumado, conocido por su sabor suave y ahumado. Ideal para sándwiches y aperitivos.' },
        { img: 'productos_cards/bondiola2.jpg', title: 'BONDIOLA', desc: 'Corte de cerdo, jugoso y sabroso, curado y ahumado. Su textura tierna y sabor intenso la hacen ideal para sándwiches y platos fríos.' },
        { img: 'productos_cards/panceta.jpg', title: 'PANCETA', desc: 'Sabrosa y crujiente panceta de cerdo curada y ahumada, ideal para realzar tus platos con un toque irresistible. ¡Un placer en cada bocado!', },
        // Añade más imágenes, títulos y descripciones según sea necesario...
    ];

    let currentIndex = 0;

    const imgElement = document.getElementById('card-img2');
    const titleElement = document.getElementById('card-title2');
    const descElement = document.getElementById('card-desc2');

    function updateCard(index) {
        imgElement.src = images[index].img;
        titleElement.textContent = images[index].title;
        descElement.textContent = images[index].desc;
    }

    // Inicializar la card con el primer elemento
    updateCard(currentIndex);

    // Cambiar el contenido cada tres segundos
    setInterval(function() {
        currentIndex = (currentIndex + 1) % images.length;
        updateCard(currentIndex);
    }, 5000);
});


// ! // ! Parte tres del "carrusel en las cards".


document.addEventListener('DOMContentLoaded', function() {
    const images = [
        { img: 'productos_cards/bimbo-artesanal.jpg', title: 'PAN LACTAL BIMBO ARTERANAL', desc: 'Suave, fresco y con ese toque casero que tanto te gusta. El Pan Bimbo artesanal es ideal para tus sándwiches y tostadas. ¡Disfruta de su sabor auténtico!' },
        { img: 'productos_cards/salvadp.jpg', title: 'PAN DE SALVADO', desc: 'Pan suave y esponjoso, enriquecido con salvado. Ideal para una alimentación saludable, con un delicioso sabor y textura.' },
        { img: 'productos_cards/panConSemillasFargo.jpg', title: 'PAN MIX DE CEREAL', desc: 'Pan tierno y nutritivo, enriquecido con una mezcla de semillas para un sabor y textura únicos. Perfecto para una alimentación equilibrada.' },
        { img: 'productos_cards/integral.png', title: 'PASTRON INTEGRAL BIMBO', desc: 'Pan esponjoso y nutritivo, hecho con harina integral para un aporte extra de fibra y minerales. Perfecto para un desayuno equilibrado o para acompañar tus comidas.' },
        { img: 'productos_cards/panHamburguesa.jpg', title: 'PAN DE HAMBURGUESA FARGO', desc: 'Pan suave y esponjoso, con una mezcla de semillas que le da un toque crujiente y un sabor delicioso. Ideal para tus hamburguesas y sándwiches.' },
        { img: 'productos_cards/panDePapaHamburguesa.png', title: 'PAN DE PAPA HAMBURGUESA BIMBO', desc: 'Suave y esponjoso, con un toque de dulzura natural. Perfecto para realzar el sabor de tus hamburguesas favoritas.' },
        { img: 'productos_cards/panchoPan.jpg', title: 'PAN DE PANCHO FARGO', desc: 'Suave y esponjoso, perfecto para realzar el sabor de tus panchos con su textura delicada y frescura incomparable.', },
        // Añade más imágenes, títulos y descripciones según sea necesario...
    ];

    let currentIndex = 0;

    const imgElement = document.getElementById('card-img3');
    const titleElement = document.getElementById('card-title3');
    const descElement = document.getElementById('card-desc3');

    function updateCard(index) {
        imgElement.src = images[index].img;
        titleElement.textContent = images[index].title;
        descElement.textContent = images[index].desc;
    }

    // Inicializar la card con el primer elemento
    updateCard(currentIndex);

    // Cambiar el contenido cada tres segundos
    setInterval(function() {
        currentIndex = (currentIndex + 1) % images.length;
        updateCard(currentIndex);
    }, 2000);
});


// ! Parte 4.

document.addEventListener('DOMContentLoaded', function() {
    const images = [
        { img: 'productos_cards/doritos.jpg', title: 'DORITOS', desc: 'Crujientes y deliciosos, los Doritos son el snack perfecto para cualquier momento. ¡Disfruta de su explosivo sabor en cada mordisco!' },
        { img: 'productos_cards/papasLays2.jpg', title: 'PAPAS LAYS CLASICAS', desc: 'Crujientes y sabrosas, estas papas fritas son el acompañamiento perfecto para cualquier ocasión, ofreciendo un sabor irresistible en cada bocado.' },
        { img: 'productos_cards/papasLaysCebolla2.png', title: 'PAPAS LAYS SABOR CEBOLLA', desc: 'Deliciosamente crujientes y con un toque de sabor a cebolla, perfectas para disfrutar en cualquier momento del día.' },
        { img: 'productos_cards/papasLaysKetchup.png', title: 'PAPAS LAYS SABOR KETCHUP', desc: 'Deliciosamente crujientes y con un toque de sabor a ketchup, perfectas para disfrutar en cualquier momento del día.' },
        { img: 'productos_cards/pringles.png', title: 'PRINGLES', desc: 'Papas en chips crujientes y de forma única, con sabores intensos y variados para disfrutar en cualquier momento.' },
        { img: 'productos_cards/pringlesQueso.png', title: 'PRINGLES SABOR QUESO', desc: 'Las Pringles sabor queso ofrecen una experiencia crujiente con el delicioso gusto del queso. Cada bocado es una combinación perfecta de textura y sabor, ideal para compartir o disfrutar en cualquier momento.' },
        { img: 'productos_cards/pringlesBarbacoa.jpg', title: 'PRINGLES SABOR BARBACOA', desc: 'Las Pringles sabor barbacoa combinan un crujido inigualable con el sabor ahumado y dulce de la barbacoa. Perfectas para disfrutar en cualquier ocasión, estas papas satisfacen todos tus antojos de sabor.' },
        { img: 'productos_cards/pringlesCebolla.jpg', title: 'PINGLES SABOR CEBOLLA', desc: 'Las Pringles sabor cebolla ofrecen un delicioso crujido con un sabor a cebolla dulce y suave. Ideal para cualquier momento del día, su combinación perfecta de sabor y textura las convierte en un snack irresistible.' },
        { img: 'productos_cards/pringlesPizza.jpg', title: 'PRINGLES SABOR PIZZA', desc: 'Las Pringles sabor pizza combinan el delicioso sabor de una pizza recién horneada con la textura crujiente característica de Pringles. Perfectas para disfrutar en cualquier ocasión, ofrecen un auténtico y sabroso gusto a pizza en cada bocado.' },
        { img: 'productos_cards/pringles-Spicy.Hot-Flavor.jpg', title: 'PRINGLES SPICY HOT FLAVOR', desc: 'Las Pringles Spicy Hot Flavor ofrecen una explosión de picante en cada bocado, combinando su textura crujiente con un sabor intensamente ardiente. Perfectas para los amantes del picante que buscan un snack con un toque audaz y atrevido.' },
        { img: 'productos_cards/laysChileLimon.jpg', title: 'PAPAS LAYS SABOR PICANTE', desc: 'Deliciosamente crujientes con un toque ácido y salado, perfectas para un snack refrescante.' },
        { img: 'productos_cards/rueditas.png', title: 'RUEDITAS', desc: 'Snacks de maíz en forma de rueda, ligeros y crujientes, ideales para picar en cualquier momento.', },
        { img: 'productos_cards/takis.jpg', title: 'TAKIS', desc: 'Exquisitos bocadillos de maíz intensamente crujientes, con un sabor picante y vibrante, ideales para los paladares más atrevidos y sofisticados.', },
        { img: 'productos_cards/cheetos.jpg', title: 'CHEETOS', desc: 'Descubre la perfección crujiente con Cheetos. Cada bocado ofrece una explosión de sabor inigualable y una textura inconfundible, convirtiéndolos en el snack ideal para cualquier ocasión.', },
        { img: 'productos_cards/cheetos-saborCrema.jpg', title: 'CHEETOS SABOR CREMA', desc: 'Sumérgete en la cremosidad irresistible de los Cheetos Sabor Crema. Cada pieza combina una textura crujiente con un delicado toque de crema, creando una experiencia de sabor única y deliciosa.', },
        { img: 'productos_cards/cheetosHotjpg.jpg', title: 'CHEETOS FLAMIN´ HOT', desc: 'Disfruta de la intensidad picante de los Cheetos Flamin´ Hot. Cada bocado ofrece una explosión de sabor ardiente y crujiente, ideal para los amantes del picante que buscan una experiencia de sabor emocionante y única.', },
        { img: 'productos_cards/cheetos_boliQueso.jpg', title: 'CHEETOS BOLIQUESO', desc: 'Deléitate con la irresistible textura crujiente y el sabor intenso de los Cheetos Boliqueso. Estos bocados redondos y sabrosos están cargados de auténtico queso, perfectos para cualquier momento del día.', },
        { img: 'productos_cards/saladix.jpg', title: 'SALADIX SABOR JAMON', desc: 'Crujientes galletas saladas con un irresistible sabor a jamón, perfectas para disfrutar en cualquier momento y compartir con amigos y familia.', },
        { img: 'productos_cards/saladixDuo.png', title: 'SALADIX DUO', desc: 'Deliciosas galletitas saladas en dos sabores complementarios, perfectas para disfrutar un toque crujiente y salado en cada momento del día. ¡Exquisitas!', },
        { img: 'productos_cards/saladixPicantes.png', title: 'SALADIX STICK PICANTE', desc: 'Palitos salados con un toque picante que despierta tus sentidos. Perfectos para un snack lleno de sabor y emoción en cada bocado.' },
        { img: 'productos_cards/palitosSaladosjpg.jpg', title: 'PALITOS SALADOS', desc: 'Deliciosos y crujientes, estos palitos ofrecen un sabor salado irresistible y una textura ligera, perfectos para acompañar cualquier momento del día.' },
        { img: 'productos_cards/twisttos.png', title: 'TWISTTOS SABOR JAMON', desc: 'Crujientes y sabrosos, estos palitos con sabor a jamón ofrecen una combinación perfecta de textura y sabor salado que encantará a tus papilas gustativas.' },
        { img: 'productos_cards/twistosQueso.png', title: 'TWISTTOS SABOR QUESO', desc: 'Deliciosos y crujientes, estos palitos con sabor a queso brindan un toque salado y una textura irresistible, perfectos para un snack lleno de sabor.' },
        { img: 'productos_cards/3d.jpg', title: '3D', desc: 'Crujiente y aireado, este snack ofrece una textura única y un sabor intenso que se deshace en la boca. Ideal para quienes buscan una experiencia de snack innovadora y deliciosa.' },
    ];

    let currentIndex = 0;

    const imgElement = document.getElementById('card-img4');
    const titleElement = document.getElementById('card-title4');
    const descElement = document.getElementById('card-desc4');

    function updateCard(index) {
        imgElement.src = images[index].img;
        titleElement.textContent = images[index].title;
        descElement.textContent = images[index].desc;
    }

    // Inicializar la card con el primer elemento
    updateCard(currentIndex);

    // Cambiar el contenido cada tres segundos
    setInterval(function() {
        currentIndex = (currentIndex + 1) % images.length;
        updateCard(currentIndex);
    }, 2000);
});


// ! Parte 5


document.addEventListener('DOMContentLoaded', function() {
    const images = [
        { img: 'productos_cards/blueLabel.png', title: 'WHISKY BLUE LABEL', desc: 'Whisky escocés de lujo, conocido por su suavidad y complejidad. Con notas de frutas secas, miel y un toque de humo, ideal para momentos especiales.' },
        { img: 'productos_cards/JackDaniel.jpg', title: 'WHISKY JACK DANIELS', desc: 'Whisky escocés de lujo, conocido por su complejidad y suavidad. Ofrece notas de frutas secas, miel y un toque de humo, ideal para momentos especiales..' },
        { img: 'productos_cards/originalCampari.png', title: 'CAMPARI', desc: 'Licor amargo con un sabor distintivo, combinando notas de hierbas y frutas. Perfecto para cócteles sofisticados y aperitivos, ofreciendo una experiencia única.' },
        { img: 'productos_cards/ronBacardi.jpg', title: 'RON BACARDI', desc: 'Ron ligero y versátil con notas de vainilla y frutas, ideal para mezclar en cócteles o disfrutar solo. Su sabor suave y refrescante lo hace perfecto para cualquier ocasión.' },
        { img: 'productos_cards/aperol.png', title: 'APEROL', desc: 'Licor italiano con un sabor cítrico y ligeramente amargo, ideal para cócteles refrescantes como el Aperol Spritz. Su color vibrante y sabor equilibrado lo hacen un favorito.' },
        { img: 'productos_cards/champagneMoetYChandon.jpg', title: 'CHAMPAGNE MOET & CHANDON', desc: 'Espumoso de lujo con un equilibrio perfecto entre frescura y sofisticación. Ofrece notas de frutas blancas y un toque de brioche, ideal para celebraciones elegantes.' },
        { img: 'productos_cards/fernet.jpg', title: 'FERNET BRANCA', desc: 'Clásico y emblemático, Fernet Branca es el aperitivo ideal con su sabor intenso y único. ¡Perfecto para disfrutar solo o en compañía!' },
        { img: 'productos_cards/cervezaAndes.jpg', title: 'CERVEZA ANDES 1LT', desc: 'Refrescante y de cuerpo equilibrado, esta cerveza argentina ofrece un sabor auténtico y una textura suave, ideal para disfrutar en cualquier ocasión.' },
        { img: 'productos_cards/cerveza-patagonia-1024x1024.png', title: 'CERVEZA PATAGONIA 1LT', desc: 'Refrescante y artesanal, esta cerveza argentina se destaca por sus sabores auténticos y equilibrados, perfecta para disfrutar en cualquier ocasión.' },
        { img: 'productos_cards/smirnoff.png', title: 'SMIRNOFF', desc: 'Vodka premium con un sabor suave y puro, perfecto para mezclas y cócteles. Ideal para quienes buscan calidad y versatilidad en cada trago.' },
        { img: 'productos_cards/ginTonic-1024x1024.png', title: 'GIN TONIC HEREDERO', desc: ' Elegante y refrescante, este gin tonic combina notas botánicas con un toque cítrico, ideal para disfrutar en cualquier ocasión con un sabor inigualable' },
    ];

    let currentIndex = 0;

    const imgElement = document.getElementById('card-img5');
    const titleElement = document.getElementById('card-title5');
    const descElement = document.getElementById('card-desc5');

    function updateCard(index) {
        imgElement.src = images[index].img;
        titleElement.textContent = images[index].title;
        descElement.textContent = images[index].desc;
    }

    // Inicializar la card con el primer elemento
    updateCard(currentIndex);

    // Cambiar el contenido cada tres segundos
    setInterval(function() {
        currentIndex = (currentIndex + 1) % images.length;
        updateCard(currentIndex);
    }, 2000);
});


// ! PARTE SEIS: GASEOSAS.


document.addEventListener('DOMContentLoaded', function() {
    const images = [
        { img: 'productos_cards/coca-cola.png', title: 'COCA COLA', desc: 'Refrescante y única, Coca-Cola es la bebida perfecta para cualquier ocasión. ¡Disfruta de su sabor inconfundible en cada sorbo!' },
        { img: 'productos_cards/pepsi.jpg', title: 'PEPSI', desc: 'Refresco clásico con un sabor dulce y refrescante, conocido por su burbujeante efervescencia y un toque de cola que revitaliza en cualquier momento del día.' },
        { img: 'productos_cards/fantaa.jpg', title: 'FANTA', desc: 'Refresco burbujeante con un sabor vibrante a naranja, perfecto para quienes buscan una bebida dulce y refrescante. Ideal para disfrutar en cualquier ocasión.' },
        { img: 'productos_cards/sprite.jpg', title: 'SPRITE', desc: 'Refresco cítrico y efervescente con un sabor refrescante a limón y lima. Perfecto para quienes buscan una bebida ligera y revitalizante en cualquier momento del día.' },
        { img: 'productos_cards/sevenUp.jpg', title: 'SEVEN UP', desc: ' Bebida clara y burbujeante con un sabor refrescante a lima-limón. Ideal para cualquier ocasión, proporcionando una experiencia ligera y revitalizante.' },
        { img: 'productos_cards/pasosDeLosToros.jpg', title: 'PASOS DE LOS TOROS', desc: 'Gaseosa intensa y burbujeante con un sabor amargo único. Perfecta para quienes buscan una bebida refrescante y diferente, ideal en cualquier momento del día.' },
        { img: 'productos_cards/scheweppes.jpg', title: 'SCHEWEPPES', desc: 'Gaseosa premium con una efervescencia distintiva y un sabor refinado. Ideal para mezclar en cócteles o disfrutar sola, ofreciendo una experiencia refrescante y sofisticada.' },
        { img: 'productos_cards/monster.jpg', title: 'MONSTER', desc: 'Bebida energética con un sabor audaz y revitalizante. Ofrece un impulso de energía con un toque dulce y una mezcla de sabores intensos, ideal para mantenerse activo.' },
        { img: 'productos_cards/redBull.jpg', title: 'RED BULL', desc: 'Bebida energética con un sabor distintivo y refrescante. Ofrece un impulso de energía y concentración, ideal para mantenerte alerta y activo en cualquier momento.' },
        { img: 'productos_cards/speed.jpg', title: 'SPEED', desc: 'Bebida energética con un sabor intenso y revitalizante. Proporciona un rápido impulso de energía y vitalidad, ideal para mantenerte activo y alerta durante el día.' },
    ];

    let currentIndex = 0;

    const imgElement = document.getElementById('card-img6');
    const titleElement = document.getElementById('card-title6');
    const descElement = document.getElementById('card-desc6');

    function updateCard(index) {
        imgElement.src = images[index].img;
        titleElement.textContent = images[index].title;
        descElement.textContent = images[index].desc;
    }

    // Inicializar la card con el primer elemento
    updateCard(currentIndex);

    // Cambiar el contenido cada tres segundos
    setInterval(function() {
        currentIndex = (currentIndex + 1) % images.length;
        updateCard(currentIndex);
    }, 2000);
});


// ! PARTE 7: CHOCOLATES.

document.addEventListener('DOMContentLoaded', function() {
    const images = [
        { img: 'productos_Chocolates/block_grande.jpg', title: 'BLOCK GRANDE', desc: 'Un deleite irresistible, el Chocolate Block grande ofrece una experiencia de sabor rica y cremosa en cada bocado. ¡Perfecto para compartir o disfrutar solo!' },
        { img: 'productos_Chocolates/milkaChocolates.png', title: 'CHOCOLATE MILKA', desc: 'Chocolate suave y cremoso con un delicado sabor a leche. Ideal para quienes buscan un placer dulce y reconfortante, ofreciendo una experiencia indulgente en cada bocado.' },
        { img: 'productos_chocolates/ferreroRocher.jpg', title: 'FERRERO ROCHER', desc: 'Bombón de lujo con una crocante avellana envuelta en una capa de chocolate con leche y una fina capa de avellanas trituradas. Un deleite sofisticado y exquisito.' },
        { img: 'productos_chocolates/chocolateHavanna.png', title: 'CHCOLATE HAVANNA', desc: 'Chocolate premium con un sabor intenso y cremoso, ideal para disfrutar de un placer dulce con un toque de elegancia. Cada bocado es una experiencia indulgente y sofisticada.' },
        { img: 'productos_chocolates/chocolateAguila.png', title: 'CHOCOLATE AGUILA', desc: 'Chocolate con una textura suave y un sabor rico y auténtico. Perfecto para quienes buscan un placer dulce y indulgente, brindando una experiencia deliciosa en cada bocado.' },
        { img: 'productos_chocolates/mantecol.jpg', title: 'MANTECOL', desc: 'Delicioso turrón de maní con una textura suave y un sabor dulce y tostado. Ideal para disfrutar como un dulce reconfortante y auténtico en cualquier ocasión.' },
        { img: 'productos_chocolates/chocolateNestleClasico.jpg', title: 'CHOCOLATE NESTLE CLASICO', desc: 'Chocolate cremoso y suave con un sabor dulce y bien equilibrado. Ideal para quienes buscan una experiencia indulgente en cada bocado, combinando calidad y placer en cada trozo.' },
        { img: 'productos_chocolates/bonOBon.jpg', title: 'BON O BON', desc: 'Bombón relleno con una mezcla cremosa de chocolate y un centro suave, ofreciendo un placer dulce y indulgente. Perfecto para disfrutar en cualquier momento.' },
        { img: 'productos_chocolates/conitosHavanna.jpg', title: 'HAVANNA CONITOS DE DULCE DE LECHE', desc: 'Deliciosos conos de chocolate rellenos de dulce de leche cremoso, ofreciendo una combinación irresistible de texturas y sabores en cada bocado.' },
        { img: 'productos_chocolates/tita.jpg', title: 'TITA', desc: 'Clásica galleta bañada en chocolate, con un relleno suave de crema de limón. Una combinación perfecta de texturas y sabores, ideal para disfrutar en cualquier momento.' },
        { img: 'productos_chocolates/milkaOreoChocolate.jpg', title: 'CHOCOLATE MILKA OREO', desc: 'Chocolate cremoso con trozos de galleta Oreo, combinando la suavidad del chocolate con el crujiente y el sabor clásico de Oreo. Una delicia irresistible en cada bocado.' },
    ];

    let currentIndex = 0;

    const imgElement = document.getElementById('card-img7');
    const titleElement = document.getElementById('card-title7');
    const descElement = document.getElementById('card-desc7');

    function updateCard(index) {
        imgElement.src = images[index].img;
        titleElement.textContent = images[index].title;
        descElement.textContent = images[index].desc;
    }

    // Inicializar la card con el primer elemento
    updateCard(currentIndex);

    // Cambiar el contenido cada tres segundos
    setInterval(function() {
        currentIndex = (currentIndex + 1) % images.length;
        updateCard(currentIndex);
    }, 2000);
});



// ! Parte 8: Alfajores.


document.addEventListener('DOMContentLoaded', function() {
    const images = [
        { img: 'productos_alfajores/alfajorRasta.jpg', title: 'ALFAJOR RASTA', desc: 'Alfajor tradicional con un relleno de dulce de leche y una cobertura de chocolate. Perfecto para quienes buscan una combinación clásica de sabores en un bocado delicioso.' },
        { img: 'productos_alfajores/alfajoresMilka.jpg', title: 'ALFAJOR MILKA', desc: 'Chocolate suave y cremoso con un delicado sabor a leche. Ideal para quienes buscan un placer dulce y reconfortante, ofreciendo una experiencia indulgente en cada bocado.' },
        { img: 'productos_alfajores/alfajorBonBon.jpg', title: 'ALFAJOR BON O BON', desc: 'Delicioso alfajor con un relleno cremoso de praliné y una cobertura de chocolate. Perfecto para disfrutar de una combinación única y deliciosa en cada bocado.' },
        { img: 'productos_alfajores/alfajorJorgitoBlancoNegro.jpg', title: 'ALFAJOR JORGITO', desc: 'Clásico alfajor argentino con un generoso relleno de dulce de leche y una cobertura de chocolate. Ideal para quienes buscan un sabor tradicional y auténtico en cada bocado.' },
        { img: 'productos_alfajores/alfajorAguila.png', title: 'ALFAJOR AGUILA', desc: 'Elegante alfajor con relleno cremoso de dulce de leche y cobertura de chocolate Águila. Una delicia clásica y sofisticada, perfecta para cualquier ocasión.' },
        { img: 'productos_alfajores/alfajorFantocheBlancoNegro.png', title: 'ALFAJOR FANTOCHE', desc: 'Suave y delicioso, con un relleno de dulce de leche y una cobertura de chocolate con un toque de crocante. Ideal para disfrutar de un placer dulce y auténtico.' },
        { img: 'productos_alfajores/alfajorOreo.jpg', title: 'ALFAJOR OREO', desc: 'Delicioso alfajor con una capa de chocolate blanco y un relleno cremoso de galleta Oreo triturada. Una combinación irresistible de sabores y texturas en cada bocado.' },
        { img: 'productos_alfajores/alfajorB&n.png', title: 'ALFAJOR B&N', desc: 'Delicioso alfajor con un relleno cremoso de dulce de leche, cubierto con una capa de chocolate blanco y negro. Una combinación perfecta de sabores y texturas en cada bocado.' },
        { img: 'productos_alfajores/alfajorPepitos.jpg', title: 'ALFAJOR PEPITOS', desc: 'Alfajor con relleno cremoso de dulce de leche y una cobertura de chocolate con trozos de galleta Pepitos. Una combinación única y deliciosa en cada bocado.' },
        { img: 'productos_alfajores/alfajorGuaymallen.png', title: 'ALFAJOR GUAYMALLEN', desc: 'Clásicos y económicos, con un relleno de dulce de leche y una cobertura de chocolate. Perfectos para disfrutar un sabor tradicional y auténtico en cada bocado.' },
        { img: 'productos_alfajores/alfajorTerrabusi.jpg', title: 'ALFAJOR TERRABUSI', desc: 'Tradicional y delicioso, con un generoso relleno de dulce de leche y una cobertura de chocolate. Perfecto para quienes buscan un sabor clásico y reconfortante en cada bocado.' },
    ];

    let currentIndex = 0;

    const imgElement = document.getElementById('card-img8');
    const titleElement = document.getElementById('card-title8');
    const descElement = document.getElementById('card-desc8');

    function updateCard(index) {
        imgElement.src = images[index].img;
        titleElement.textContent = images[index].title;
        descElement.textContent = images[index].desc;
    }

    // Inicializar la card con el primer elemento
    updateCard(currentIndex);

    // Cambiar el contenido cada tres segundos
    setInterval(function() {
        currentIndex = (currentIndex + 1) % images.length;
        updateCard(currentIndex);
    }, 2000);
});


// ! PARTE 9: QUESOS UNTABLES, MERMELADAS, DULCES.

document.addEventListener('DOMContentLoaded', function() {
    const images = [
        { img: 'productos_cards/la-paulina.jpg', title: 'QUESO CREMA LA PAULINA', desc: 'Suave y cremoso, el queso crema La Paulina es ideal para untar y realzar el sabor de tus bocadillos. ¡Perfecto para un toque gourmet en tus comidas!' },
        { img: 'productos_untables/laPaulinaLight.jpg', title: 'QUESO CREMA LA PAULINA LIGHT', desc: 'Suave y cremoso, con menos grasa pero sin sacrificar sabor. Ideal para untar o cocinar, ofreciendo una opción ligera y deliciosa en cada bocado.' },
        { img: 'productos_untables/laPaulinaCheddar.jpg', title: 'QUESO CREMA SABOR CHEDDAR LA PAULINA', desc: 'Cremoso y con el sabor intenso del cheddar. Perfecto para untar, cocinar o realzar tus recetas con un toque delicioso y único en cada bocado.' },
        { img: 'productos_untables/laTonaditaJamon.png', title: 'QUESO SABOR JAMON LA TONADITA', desc: 'Con un delicioso sabor a jamón. Ideal para untar en tostadas, sándwiches o como acompañamiento, ofreciendo un toque sabroso y único en cada bocado.' },
        { img: 'productos_untables/mantecaLaPaulina.jpg', title: 'MANTECA LA PAULINA', desc: 'De textura suave y un sabor delicioso, ideal para cocinar, hornear o untar. Perfecta para realzar el sabor de tus recetas favoritas en cada bocado.' },
        { img: 'productos_untables/mantecaLaSerenisima.jpg', title: 'MANTECA LA SERENISIMA', desc: 'Suave y de excelente calidad, perfecta para cocinar, hornear o untar. Añade un toque delicioso a tus recetas y realza el sabor en cada bocado.' },
        { img: 'productos_untables/mermeladaDuraznoBc.jpg', title: 'MERMELADA DURAZNO LA CAMPAGNOLA', desc: 'Deliciosa y con auténtico sabor a durazno. Ideal para untar en tostadas, rellenar postres o acompañar desayunos, ofreciendo un toque dulce y natural.' },
        { img: 'productos_untables/mermeladaFrutillaBc.jpg', title: 'MERMELADA FRUTILLA LA CAMPAGNOLA', desc: 'Con un auténtico sabor a frutilla, ideal para untar en tostadas, rellenar postres o acompañar desayunos. Un toque dulce y natural en cada bocado.' },
        { img: 'productos_untables/mermeladaFrutosRojosBc.jpg', title: 'MERMELADA FRUTOS ROJOS LA CAMPAGNOLA', desc: 'Con una mezcla de sabores de frutos rojos, perfecta para untar, rellenar postres o acompañar desayunos. Un toque dulce y natural en cada bocado.' },
        { img: 'productos_untables/mermeladaArandanoBc.jpg', title: 'MERMELADA ARANDANOS LA CAMPAGNOLA', desc: 'Con un sabor auténtico y delicioso a arándanos. Ideal para untar en tostadas, rellenar postres o acompañar desayunos, ofreciendo un toque dulce y natural.' },
        { img: 'productos_untables/pastaManiKing.jpg', title: 'PASTA DE MANI KING', desc: 'Cremosa y nutritiva, con el auténtico sabor del maní. Ideal para untar en tostadas, añadir a batidos o utilizar en recetas, ofreciendo un toque saludable y delicioso.' },
    ];

    let currentIndex = 0;

    const imgElement = document.getElementById('card-img9');
    const titleElement = document.getElementById('card-title9');
    const descElement = document.getElementById('card-desc9');

    function updateCard(index) {
        imgElement.src = images[index].img;
        titleElement.textContent = images[index].title;
        descElement.textContent = images[index].desc;
    }

    // Inicializar la card con el primer elemento
    updateCard(currentIndex);

    // Cambiar el contenido cada tres segundos
    setInterval(function() {
        currentIndex = (currentIndex + 1) % images.length;
        updateCard(currentIndex);
    }, 2000);
});



// ! PARTE 10: COMIDAS.

document.addEventListener('DOMContentLoaded', function() {
    const images = [
        { img: 'productos_comidas/hamburguesasSwifft.jpg', title: 'HAMGURGUESAS SWIFFT', desc: 'Jugosas y sabrosas, con una textura perfecta y un sabor irresistible. Ideal para disfrutar en cualquier ocasión, ofreciendo una experiencia gourmet en cada bocado.' },
        { img: 'productos_comidas/hamburguesaPaty.jpg', title: 'HAMBURGUESAS PATY', desc: 'Clásicas y jugosas, con un sabor delicioso y una textura perfecta. Ideales para preparar en cualquier ocasión, brindando una experiencia de sabor inigualable en cada bocado.' },
        { img: 'productos_comidas/hamburguesaGoodMark.jpg', title: 'HAMBURGUESAS GOOD MARK', desc: 'Deliciosas y jugosas, con una textura perfecta y un sabor auténtico. Ideales para disfrutar en cualquier ocasión, brindando una experiencia gourmet en cada bocado.' },
        { img: 'productos_comidas/hamburguesaPaladinni.png', title: 'HAMBURGUESA PALADINI', desc: 'Hechas con carne de primera calidad, ofrecen un sabor auténtico y jugoso. Perfectas para disfrutar en cualquier ocasión, brindando una experiencia deliciosa en cada bocado.' },
        { img: 'productos_comidas/medallonesPolloModificarGranjaDelSol.jpg', title: 'MEDALLONES DE POLLO GRANJA DEL SOL', desc: 'Sabrosos y nutritivos, elaborados con ingredientes de alta calidad. Ideales para una comida rápida y saludable, ofreciendo una experiencia deliciosa en cada bocado.' },
        { img: 'productos_comidas/nuggetsGranjaDelSol.png', title: 'NUGGETS GRANJA DEL SOL', desc: 'Crujientes por fuera y tiernos por dentro, hechos con pollo de alta calidad. Perfectos para una comida rápida y deliciosa, ideales para toda la familia.' },
        { img: 'productos_comidas/nuggetsTresArroyos.jpg', title: 'NUGGETS TRES ARROTOS', desc: 'Crujientes y dorados por fuera, tiernos y jugosos por dentro. Elaborados con pollo de alta calidad, ideales para disfrutar de una comida rápida y deliciosa.' },
        { img: 'productos_comidas/salchichaPaladini.jpg', title: 'SALCHICHAS PALADINI', desc: 'Elaboradas con ingredientes seleccionados y un sabor inconfundible. Perfectas para parrilladas, asados o simplemente a la parrilla, ofreciendo una experiencia sabrosa y versátil en cada porción.' },
        { img: 'productos_comidas/salchichaVienissima.png', title: 'SALCHICHAS VIENISSIMA', desc: 'Clásicas y deliciosas, hechas con ingredientes de alta calidad. Perfectas para asados, parrilladas o disfrutar en un pan, ofreciendo un sabor inigualable en cada bocado.' },
        { img: 'productos_comidas/salchichaVienaAlemana.png', title: 'SALCHICHAS VIENA ALEMANA', desc: 'Auténticas y sabrosas, elaboradas con ingredientes de alta calidad. Ideales para parrilladas y comidas rápidas, brindando un sabor tradicional en cada bocado.' },
        { img: 'productos_comidas/salchichaVienaAlemana.png', title: 'SANWICH DE MIGA', desc: 'Delicado y sabroso, con capas de pan blanco y un relleno fresco. Ideal para picnics, reuniones o como un snack rápido, ofreciendo una experiencia deliciosa en cada bocado.' },
        { img: 'productos_comidas/tapaDeEmpanadaLaSalteña.jpg', title: 'TAPA DE EMPANADA LA SALTEÑA', desc: 'Ideal para preparar empanadas caseras con una masa suave y fácil de manejar. Perfecta para rellenar con tus ingredientes favoritos, ofreciendo un sabor auténtico y delicioso en cada empanada.' },
        { img: 'productos_comidas/tapaDeTartaLaSalteña.png', title: 'TAPA DE TARTA LA SALTEÑA', desc: 'Perfecta para preparar tartas caseras con una masa suave y fácil de manejar. Ideal para rellenar con tus ingredientes favoritos, brindando un sabor auténtico y delicioso en cada porción.' },
    ];

    let currentIndex = 0;

    const imgElement = document.getElementById('card-img10');
    const titleElement = document.getElementById('card-title10');
    const descElement = document.getElementById('card-desc10');

    function updateCard(index) {
        imgElement.src = images[index].img;
        titleElement.textContent = images[index].title;
        descElement.textContent = images[index].desc;
    }

    // Inicializar la card con el primer elemento
    updateCard(currentIndex);

    // Cambiar el contenido cada tres segundos
    setInterval(function() {
        currentIndex = (currentIndex + 1) % images.length;
        updateCard(currentIndex);
    }, 2000);
});


// ! PARTE 10: LIMPIEZA.

document.addEventListener('DOMContentLoaded', function() {
    const images = [
        { img: 'productos_limpieza/lavandinaAyudin.jpg', title: 'LAVANDINA AYUDIN', desc: 'Potente desinfectante que elimina el 99.9% de los gérmenes y bacterias. Ideal para limpiar y desinfectar superficies, ofreciendo una higiene profunda y confiable en tu hogar.' },
        { img: 'productos_limpieza/cif.jpg', title: 'CIF', desc: 'Limpiador multiusos que remueve eficazmente la suciedad y manchas difíciles. Ideal para mantener superficies limpias y brillantes, proporcionando una limpieza profunda. ' },
        { img: 'productos_limpieza/lysoford.jpg', title: 'LYSOFORD', desc: 'Elimina bacterias y mantiene tu hogar fresco. Su fórmula innovadora ofrece una limpieza profunda y efectiva, garantizando un ambiente saludable y limpio' },
        { img: 'productos_limpieza/detergenteCif.jpg', title: 'DETERGENTE CIF', desc: 'Elimina manchas difíciles y limpia profundamente con facilidad. Su fórmula potente devuelve el brillo a tus superficies, dejando tu hogar impecable y reluciente.' },
        
    ];

    let currentIndex = 0;

    const imgElement = document.getElementById('card-img11');
    const titleElement = document.getElementById('card-title11');
    const descElement = document.getElementById('card-desc11');

    function updateCard(index) {
        imgElement.src = images[index].img;
        titleElement.textContent = images[index].title;
        descElement.textContent = images[index].desc;
    }

    // Inicializar la card con el primer elemento
    updateCard(currentIndex);

    // Cambiar el contenido cada tres segundos
    setInterval(function() {
        currentIndex = (currentIndex + 1) % images.length;
        updateCard(currentIndex);
    }, 2000);
});


// ! PARTE 11: ADEREZOS.

document.addEventListener('DOMContentLoaded', function() {
    const images = [
        { img: 'productos_cards/hellmans.jpg', title: 'MAYONESA HELLMANS', desc: 'Cremosa y deliciosa, la mayonesa Hellmann´s es el complemento perfecto para tus comidas. ¡Realza el sabor de tus platos favoritos!' },
        { img: 'productos_aderezos/mayonesaNatura.jpg', title: 'MAYONESA NATURA', desc: 'Cremosa y suave, elaborada con ingredientes frescos y naturales. Ideal para ensaladas, sándwiches y más, añadiendo un delicioso toque a tus comidas.' },
        { img: 'productos_aderezos/ketchupNatura.png', title: 'KETCHUP NATURA', desc: 'Elaborado con tomates frescos y seleccionados, ofrece un sabor natural y auténtico. Perfecto para realzar tus comidas favoritas con un toque delicioso.' },
        { img: 'productos_aderezos/ketchupHeinz.jpg', title: 'KETCHUP HEINZ', desc: 'Sabor inigualable con tomates frescos y maduros. Ideal para acompañar tus comidas favoritas, ofreciendo una deliciosa experiencia en cada bocado.' },
        { img: 'productos_aderezos/mostazaHeinz.png', title: 'MOSTAZA HEINZS', desc: 'Intensifica el sabor de tus comidas con su toque único y delicioso. Perfecta para acompañar sándwiches, hamburguesas y mucho más. ¡Disfruta!' },
        { img: 'productos_aderezos/savora.jpg', title: 'SAVORA MOSTAZA', desc: 'Disfruta de su sabor inconfundible y suave, ideal para realzar tus platos favoritos. Perfecta para carnes, sándwiches y ensaladas. ¡Un clásico en tu mesa!' },
        { img: 'productos_aderezos/salsaGolfHellmans.png', title: 'SALSA GOLF HELLMANS', desc: 'Combina la suavidad de la mayonesa con el toque perfecto de ketchup. Ideal para ensaladas, mariscos y sándwiches. Añade un sabor único a tus comidas.' },
        { img: 'productos_aderezos/aliOliDosAnclas.jpg', title: 'SALSA ALI OLI DOS ANCLAS', desc: 'El complemento perfecto con su ajo suave y cremoso. Ideal para carnes, pescados y como dip. Disfruta de su sabor mediterráneo auténtico.' },
        
    ];

    let currentIndex = 0;

    const imgElement = document.getElementById('card-img12');
    const titleElement = document.getElementById('card-title12');
    const descElement = document.getElementById('card-desc12');

    function updateCard(index) {
        imgElement.src = images[index].img;
        titleElement.textContent = images[index].title;
        descElement.textContent = images[index].desc;
    }

    
    updateCard(currentIndex);

    
    setInterval(function() {
        currentIndex = (currentIndex + 1) % images.length;
        updateCard(currentIndex);
    }, 2000);
});




// ! PRUEBA.


