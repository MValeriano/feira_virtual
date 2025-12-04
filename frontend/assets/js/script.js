let dadosProdutos = [
            {
                id: 1,
                name: "Bolsas de Crochê Personalizadas",
                category: "artesanato",
                description: "Bolsas artesanais feitas com fio de algodão e muito carinho. Vários modelos e cores disponíveis.",
                price: "R$ 45,00 - R$ 80,00",
                contact: "@artes.maria (Instagram)",
                image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3JvY2hldCUyMGJhZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            },
            {
                id: 2,
                name: "Doces Caseiros",
                category: "culinaria",
                description: "Doces caseiros variados: brigadeiros, beijinhos, cajuzinhos e bolos personalizados. Encomendas com 48h de antecedência.",
                price: "R$ 3,50 (unidade)",
                contact: "(11) 98888-7777 (WhatsApp)",
                image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FuZHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            },
            {
                id: 3,
                name: "Consertos de Roupas",
                category: "costura",
                description: "Serviço de conserto e ajuste de roupas. Barrado de calças, ajuste de blusas, conserto de zíperes e muito mais.",
                price: "A partir de R$ 15,00",
                contact: "(11) 97777-6666",
                image: "https://images.unsplash.com/photo-1506629905877-52a5ca6d63b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNld2luZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            },
            {
                id: 4,
                name: "Aulas de Culinária Vegana",
                category: "servicos",
                description: "Aulas particulares de culinária vegana para iniciantes. Aprenda a fazer pratos saborosos e nutritivos.",
                price: "R$ 80,00 (aula de 2h)",
                contact: "culinaria.vegana@gmail.com",
                image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmVnYW4lMjBjb29raW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            },
            {
                id: 5,
                name: "Bonecas de Pano Personalizadas",
                category: "artesanato",
                description: "Bonecas de pano feitas à mão com detalhes cuidadosamente costurados. Perfeitas para presentear crianças.",
                price: "R$ 65,00",
                contact: "@bonecas.artesanais (Instagram)",
                image: "https://images.unsplash.com/photo-1530651788726-1c463a092d5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZG9sbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            },
            {
                id: 6,
                name: "Salgados para Festas",
                category: "culinaria",
                description: "Salgados congelados para festas e eventos. Coxinhas, empadinhas, risoles e mais. Entrega gratuita na região.",
                price: "R$ 0,90 (unidade) - mínimo 50 unidades",
                contact: "(11) 95555-4444 (WhatsApp)",
                image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c25hY2tzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            }
        ];

let gridProdutos = window.document.getElementById('grid-produtos');

//for(let i = 0; i < dadosProdutos.length; i++){
//function preencheGrid(produto){
//let i = 0;
//while(i < dadosProdutos.length){
for(let produto of dadosProdutos ){
    //gridProdutos.innerHTML +=
    //`<div id="card-produto">
    let novaDiv = document.createElement("div");
    novaDiv.setAttribute("id","card-produto");
    novaDiv.innerHTML = `<img src=${produto.image}
            alt="imagem de ${produto.name}, ${produto.description}">
        <div> ${produto.category} </div>

        <h4> ${produto.name} </h4>
        <p> ${produto.description}</p>

        <div> ${produto.price} </div>
        <div>
            <a href="#">
                <i class="fas fa-share-alt"></i>
                Compartilhar
            </a>
            <a href="#">
                <i class="fas fa-eye"></i>
                Ver detalhes
            </a>
        </div>`;
    //</div>
    gridProdutos.appendChild(novaDiv);
}

//dadosProdutos.forEach(preencheGrid);

//window.document.getElementByClassName('produtos');
//window.document.getElementByTagName('div'); 
//window.document.querySelector('#grid-produtos'); 
//window.document.querySelector('.grid-produtos'); 