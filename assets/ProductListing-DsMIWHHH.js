import{j as r,L as c}from"./index-Cf7PaBZi.js";const i=({discount:e,image:n,type:s,name:t,price:x,priceDiscount:a})=>r.jsx(c,{to:"/products/1",children:r.jsx("div",{className:`\r
          w-[300px] h-[439px]\r
          max-sm:w-[100%]\r
        \r
        `,children:r.jsxs("div",{className:`relative\r
             bg-white shadow-sm rounded-[5px]\r
               w-[315px] h-[347px]  \r
             `,children:[r.jsx("div",{className:`\r
                    absolute\r
                    bg-[#E7FF86]\r
                    rounded-[29px]\r
                    w-[96px] h-[32px]\r
                    top-[20px] left-[20px]\r
                    text-[14px] font-bold\r
                    text-[#474747]\r
                    flex justify-center \r
                    items-center\r
                `,children:e}),r.jsx("div",{className:`\r
                    flex justify-center items-center\r
                    h-full\r
                    `,children:r.jsx("img",{className:`\r
                     -rotate-30 rounded-[10px]\r
                     `,src:n,alt:"Tênis"})}),r.jsx("div",{className:`\r
                  text-[14px] font-bold\r
                   text-[#8F8F8F] my-2\r
                   tracking-[.75px]\r
                `,children:s}),r.jsx("div",{className:`\r
                  text-[#474747] text-[26px]\r
                `,children:t}),r.jsxs("div",{className:"flex gap-3",children:[r.jsx("div",{className:`\r
                  text-[#8F8F8F] text-[24px]\r
                    line-through decoration-[1.5px]\r
                `,children:x}),r.jsx("div",{className:`\r
                  text-[#1F1F1F] text-[24px]\r
                  font-bold \r
\r
                `,children:a})]})]})})}),l=({arrayProductCard:e})=>r.jsx("div",{className:` \r
          text-[#474747] \r
          mb-4 \r
          w-[1320px]\r
          max-sm:ml-0\r
          max-sm:w-[23.4rem]\r
        `,children:r.jsx("div",{className:`\r
            flex flex-wrap gap-9\r
            max-sm:justify-center\r
          `,children:e.map((n,s)=>r.jsx(i,{discount:n.discount,image:n.image,type:n.type,name:n.name,price:n.price,priceDiscount:n.priceDiscount},s))})});export{l as P};
