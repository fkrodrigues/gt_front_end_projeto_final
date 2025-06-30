# Projeto Final - Front-End E-commerce

Este projeto é uma loja virtual (e-commerce) desenvolvida com React e Tailwind CSS, contendo páginas de listagem de produtos, visualização de produto e componentes reutilizáveis.

## 📂 Estrutura de Pastas
```
Front-End Projeto Final/
├── components/          # Componentes reutilizáveis
├── layout/             # Layout principal (Header/Footer/Outlet)
├── pages/              # Páginas da aplicação
├── routes/             # Configuração de rotas
├── App.jsx             # Componente principal
├── main.jsx            # Ponto de entrada
└── tailwind.css        # Estilos globais
````

## Componentes reutilizáveis
````
├── components/
│   ├── Spinner(pasta)
│   ├── BannerFinalHome
│   ├── BannerHome
│   ├── BuyBox
│   ├── Checkbox
│   ├── Collection
│   ├── FilterBy
│   ├── FilterGroup
│   ├── Footer
│   ├── Gallery
│   ├── Header
│   ├── IconsCollection
│   ├── ItemCollection
│   ├── LastBannerHome
│   ├── Logo
│   ├── ProductCard
│   ├── ProductListing
│   ├── ProductOptions
│   ├── RatingNote
│   ├── SearchBar
│   ├── Section
│   ├── ShowThumbs
│   ├── SidebarBurger
│   └── Thumb
....

````


## 🛠 Componentes Principais

### Layout
- **Header**: Com logo, busca, navegação e carrinho
- **Footer**: Com informações da loja e links

### Compartilhados
- **Section**: Container para seções com título
- **ProductCard**: Card de produto com imagem, nome e preço
- **ProductListing**: Listagem de produtos
- **Gallery**: Galeria de imagens com navegação
- **BuyBox**: Área de compra do produto
- **ProductOptions**: Opções de variação do produto

## 🖥 Páginas

### Home
- Banner principal
- Coleções em destaque
- Produtos em alta
- Banner Final

### Listagem de Produtos
- Filtros por categoria/preço
- Ordenação
- Listagem de produtos

### Visualização do Produto
- Galeria de imagens
- Detalhes do produto
- Opções (tamanho/cor)
- Produtos recomendados

## 🚀 Como Executar

1. Instale as dependências:

npm install
Inicie o servidor de desenvolvimento:
npm run dev

🎨 Estilização
Utiliza Tailwind CSS e um CSS global para estilos
Design responsivo
Cores e tamanhos baseados nas sujestões do projeto

📌 Dependências/Pacotes Utilizados
````
 {
    "@tailwindcss/vite": "^4.1.7",
    "flowbite-react": "^0.11.8",
    "hamburger-react": "^2.5.2",
    "primereact": "^10.9.5",
    "react": "^19.1.0",
    "react-dom": "^19.1.0",
    "react-icons": "^5.5.0",
    "react-router-dom": "^7.6.2",
    "swiper": "^11.2.8",
    "tailwindcss": "^4.1.7"
  }
````

Este README fornece uma visão geral simplificada do projeto mantendo as informações essenciais.
