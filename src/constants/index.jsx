import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { chocolate, caramel, vanilla, person1, person2, person3, creatine, omega, raw_whey, whey_isolate, } from "../assets/images";

export const navLinks = [
    
    { href: "#about-us", label: "Comprar" },
    { href: "#products", label: "Produtos" },
    { href: "#contact-us", label: "Contato" },
];

export const shoes = [
    {
        thumbnail: chocolate,
        bigShoe: chocolate,
    },
    {
        thumbnail: caramel,
        bigShoe: caramel,
    },
    {
        thumbnail: vanilla,
        bigShoe: vanilla,
    },
];

export const statistics = [
    { value: '10+', label: 'Produtos' },
    { value: '5+', label: 'Países' },
    { value: '25k+', label: 'Clientes satisfeitos' },
];

export const products = [
  
];











export const services = [
    {
        imgURL: truckFast,
        label: "Frete grátis",
        subtext: "Desfrute de compras perfeitas com nosso serviço de remessa gratuita."
    },
    {
        imgURL: shieldTick,
        label: "Pagamento Seguro",
        subtext: "Experimente transações sem preocupações com nossas opções de pagamento seguras."
    },
    {
        imgURL: support,
        label: "Horário de suporte (10h às 18h)",
        subtext: "Nossa equipe dedicada está aqui para ajudá-lo em cada etapa do processo."
    },
];

export const reviews = [
    {
        imgURL: person1,
        customerName: 'Lucas Otavio de Oliveira',
        rating: "#ISupportPowerMan",
        feedback: "POWERMAN me ajudou a manter meu condicionamento físico. Confio plenamente no POWERMAN porque são feitos com ingredientes naturais, sem adoçantes ou conservantes artificiais. Eu recomendo fortemente aos meus fãs que comprem o POWERMAN"
    },
    {
        imgURL: person2,
        customerName: 'Gabriel Ignácio Silva',
        rating: "#ISupportPowerMan",
        feedback: "Já experimentei muitas marcas antes, o POWERMAN, deixa o meu corpo desempenhar um papel crucial. Com POWERMAN, não me preocupo com o fato de meu corpo receber a proteína que merece. Aplaudo a equipe me sinto jovem. "
    },

    {
        imgURL: person3,
        customerName: 'Renan Campos de Oliveira',
        rating: "#ISupportPowerMan",
        feedback: "dois dos fatores mais importantes que ajudam a melhorar meu desempenho são o condicionamento físico e a nutrição. Estou aliviado o POWERMAN está me propondo uma energia no dia dia surreal."
        
    }
];











export const footerLinks = [
    {
        title: "Informações",
        links: [
            { name: "Sobre nós", link: "/" },
            { name: "Informações Nutricionais", link: "/" },
            { name: "Contato", link: "/" },
            { name: "Cancelamento e Reembolso", link: "/" },
            { name: "Termos e Condições", link: "/" },
            { name: "Envio e Entrega", link: "/" },
        ],
    },

    

    {
        title: "Sobre nós",
        links: [
            { name: "Redes Sociais", link: "/" },
            { name: "Autenticidade", link: "/" },
           
        ],
    },

    {
        title: "Mais",
        links: [
            { name: "Minha conta", link: "/" },
            { name: "Carrinho", link: "/" },
            { name: "Cancelamento de Pedido", link: "/" },
            { name: "Carrinho", link: "/" },
            { name: "Contate-nos", link: "/" },
        ],
    },

    // 




    
    {
        title: "Suporte",
        links: [
            { name: "(19) 99464-7291", link: "mailto:customer@nike.com" },
            { name: "Info@naturaltein.in", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo"  },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];