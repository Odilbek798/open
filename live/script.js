
const ProductsData =[
    {
        img:src='./img/card1.png',
        title: '3d Sof Card',
        user:'😁  Esther Howard',
        price:'0.85',
    },
    {
        img:src='./img/card2.png',
        title: 'The mystery of the black square',
        user:'😁  Esther Howard',
        price:'0.85',
    },
    {
        img:src='./img/card3.png',
        title: 'Pink Cloud 🌥',
        user:'😁  Esther Howard',
        price:'0.85',
    },
    {
        img:src='./img/card4.png',
        title: '3D Ethereum',
        user:'😁  Esther Howard',
        price:'0.85',
    },
]

const ProductsData2=[
    {
        img:src='./img/card1.png',
        title: '3d Sof Card',
        user:'😁  Esther Howard',
        price:'0.85',
    },
    {
        img:src='./img/card1.png',
        title: '3d Sof Card',
        user:'😁  Esther Howard',
        price:'0.85',
    },
    {
        img:src='./img/card1.png',
        title: '3d Sof Card',
        user:'😁  Esther Howard',
        price:'0.85',
    }, {
        img:src='./img/card1.png',
        title: '3d Sof Card',
        user:'😁  Esther Howard',
        price:'0.85',
    },
    {
        img:src='./img/card1.png',
        title: '3d Sof Card',
        user:'😁  Esther Howard',
        price:'0.85',
    }, {
        img:src='./img/card1.png',
        title: '3d Sof Card',
        user:'😁  Esther Howard',
        price:'0.85',
    }, {
        img:src='./img/card1.png',
        title: '3d Sof Card',
        user:'😁  Esther Howard',
        price:'0.85',
    }, {
        img:src='./img/card1.png',
        title: '3d Sof Card',
        user:'😁  Esther Howard',
        price:'0.85',
    }, {
        img:src='./img/card1.png',
        title: '3d Sof Card',
        user:'😁  Esther Howard',
        price:'0.85',
    }, {
        img:src='./img/card1.png',
        title: '3d Sof Card',
        user:'😁  Esther Howard',
        price:'0.85',
    }, {
        img:src='./img/card1.png',
        title: '3d Sof Card',
        user:'😁  Esther Howard',
        price:'0.85',
    },
    {
        img:src='./img/card1.png',
        title: '3d Sof Card',
        user:'😁  Esther Howard',
        price:'0.85',
    },
]

const wrapper = document.querySelector('.live__wrapper1')
const cards = ProductsData.map(card => {
    return `
    <div class="live__card">
    <img  class="live__card-img" src=${card.img} alt="">

    <div class="live__card-box">
        <h3>${card.title}</h3>

        <div>
                <p>${card.user}</p>
                <p>Current Bid <br>
                <b>${card.price}</b>   
                </p>
            </div>
        </div>
    </div>
    `
}).join('')
wrapper.innerHTML = cards


const wrapper2 = document.querySelector('.live__wrapper2')
const cards2 = ProductsData2.map(card => {
    return `
    <div class="live__card">
    <img  class="live__card-img" src=${card.img} alt="">

    <div class="live__card-box">
        <h3>${card.title}</h3>

        <div>
                <p>${card.user}</p>
                <p>Current Bid <br>
                <b>${card.price}</b>   
                </p>
            </div>
        </div>
    </div>
    `
}).join('')
wrapper.innerHTML = cards2




const modal = document.querySelector('.modal')
const openModal = document.querySelector('#open-btn')
const closeModal = document.querySelector('.close')

openModal.onclick=()=>{
    modal.classList.add('active')
}


closeModal.onclick=()=>{
    modal.classList.remove('active')
}





document.getElementById('telegramForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const token = '7539267776:AAF0JDDrvUaZKKLFKzWe-1bmMS_PGAFYzg8';  // Замените на ваш токен
    const chat_id = '-4534349636';  // Замените на ваш chat_id
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    // Формируем сообщение
    const message = `Name: ${name}\nPhone: ${phone}`;

    const data = {
      chat_id: chat_id,
      text: message
    };

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      if (data.ok) {
        alert("Message sent!");
      } else {
        alert("Error sending message.");
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert("Error sending message.");
    });
  });

const theme =document.querySelector('#theme')
const body = document.querySelector('body')

theme.onclick=()=>{
    body.classList.toggle('dark')
}