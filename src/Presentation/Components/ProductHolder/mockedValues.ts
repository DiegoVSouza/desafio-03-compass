import { Product, ProductPag } from "../../../Domain/Model/Product";

export const productsMockUp: Product[] = [
  {
    id: "1",
    name: "Product 1",
    categoryId: "category1",
    category: {
      id: "category1",
      image_link: 'https://s3-alpha-sig.figma.com/img/3740/8e44/4bdba3a6bef9d68df2d9a06e32e96c61?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eXDN~~SIONEDUSYZ24UpXRHM~QdpUbJ1TDVyH-ZgTLjT5CP94xJPqJoRP48OIVtBzNoROXqjwlDsAnTV1~nI~dCL9wkKC3nqcyoReWK3i53vtA~4moc7r4AXw5eMnabZGZjRl0zP-FwMnkoYMhp4lS2Pkx6zCdZbgIOL0f4tOQZqeQIGjFPzbDP4UeKSxdDXRzYu6jBaeS2knZK0uPyIbsj1~H1tc81llFHX60fyrCqbME3jYDKpxuwMM9JayaHLqBECWayib51991JmATWPgzwFF5UJzEwsP09ahI0ackudCtUxovJx6ic86TYRYQkb91hUALJOJGITSLvIik4YYA__',
      name: "Category 1",
      description: "Description of Category 1 ",
      created_date: new Date(),
      updated_date: new Date()
    },
    description: "Description of Product 1",
    large_description: "Large description of Product 1",
    price: 50,
    discount_price: 45,
    discount_percent: 0,
    is_new: true,
    image_links: ["https://s3-alpha-sig.figma.com/img/4491/a0ea/43eebd52ea72d60650f31030ec4bf7e6?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FrWt31oE85sSOpNqwYmGVUiHxWJbOU8WiEc5f2-zt0Ufhw8IGGWfqBvE88GjnbmdT5Pd0KB1ZNOnYvdIKtqTIGBPOxZMVooeEbzer1cjUbzBqG2OxyKvzXFRE-oJ2ScBq6TEeYlAA6SSzjR-8bIo0vCN6PELHYQi1q8zkkz6n5QatQC5so8eogMiGsInbTGvToY5humB~t1UE-pZMiCnBmzvX9-H3pFuuMH9iDdgNgqiH6jCqwLdh9ivv5144Zit6gZE8qmUpQCqu3EO38IJZeMbQYrb6lvj5cv2QOpf1Y6lwk6GyQSa4CaYQJRfbw4lRL3tIMNWUA-1ZhsSkqCfDg__", "https://s3-alpha-sig.figma.com/img/3ed3/53ed/bdb0310fb379a6b1828809d2c0652533?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hpYFto6zTWWFoeU-T7sEDRMeDgJB11QC5Cu6NkiO5Rjk5qPBBQjXcdDVL24tKMp-wqOLC2FfSV6XqMI0x76qip1RuV~-FuVhzevJ1V1E1U89dzQumDrnkyMsB8kp2UKFmsRXBmdj4B0~Tv~RQqwFnRf9xvBcU5LQGQufBaRVg9FgFlYvQgczKgk4V0znQxZflnUOjNbAs0lDCDKiu9eCEJpSm0AL6owL76zV4u3B82WnIYPC~9Uk0OMpef0Sqdq8cQN~IerN7UcaPH6eL05OVMfliDRvDw7-i4HXt6dkjOWzKSQSQfnImSYl4ZNROuLyhCHmtWBxXUFPSnb1FaC0vg__"],
    sku: 'SS001',
    attributesId: '1',
    attributes: [{
      id: '1',
      color:'white',
      qtd: 1,
      size: 'X'
    }],
    created_date: new Date(),
    updated_date: new Date()
  },
  {
    id: "2",
    name: "Product 2",
    categoryId: "category2",
    category: {
      id: "category2",
      image_link: 'https://s3-alpha-sig.figma.com/img/3740/8e44/4bdba3a6bef9d68df2d9a06e32e96c61?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eXDN~~SIONEDUSYZ24UpXRHM~QdpUbJ1TDVyH-ZgTLjT5CP94xJPqJoRP48OIVtBzNoROXqjwlDsAnTV1~nI~dCL9wkKC3nqcyoReWK3i53vtA~4moc7r4AXw5eMnabZGZjRl0zP-FwMnkoYMhp4lS2Pkx6zCdZbgIOL0f4tOQZqeQIGjFPzbDP4UeKSxdDXRzYu6jBaeS2knZK0uPyIbsj1~H1tc81llFHX60fyrCqbME3jYDKpxuwMM9JayaHLqBECWayib51991JmATWPgzwFF5UJzEwsP09ahI0ackudCtUxovJx6ic86TYRYQkb91hUALJOJGITSLvIik4YYA__',
      name: "Category 2",
      description: "Description of Category 2 ",
      created_date: new Date(),
      updated_date: new Date()
    },
    description: "Description of Product 2 linda charmosa",
    large_description: "Large description of Product 2",
    price: 60,
    discount_price: 55,
    discount_percent: 8,
    is_new: false,
    image_links: ["https://s3-alpha-sig.figma.com/img/3ed3/53ed/bdb0310fb379a6b1828809d2c0652533?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hpYFto6zTWWFoeU-T7sEDRMeDgJB11QC5Cu6NkiO5Rjk5qPBBQjXcdDVL24tKMp-wqOLC2FfSV6XqMI0x76qip1RuV~-FuVhzevJ1V1E1U89dzQumDrnkyMsB8kp2UKFmsRXBmdj4B0~Tv~RQqwFnRf9xvBcU5LQGQufBaRVg9FgFlYvQgczKgk4V0znQxZflnUOjNbAs0lDCDKiu9eCEJpSm0AL6owL76zV4u3B82WnIYPC~9Uk0OMpef0Sqdq8cQN~IerN7UcaPH6eL05OVMfliDRvDw7-i4HXt6dkjOWzKSQSQfnImSYl4ZNROuLyhCHmtWBxXUFPSnb1FaC0vg__", "https://s3-alpha-sig.figma.com/img/2084/99f3/7c62fb49f7d4a1a6a5dc5959b40150ed?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ax26kfG07AEj0aQqpRNceOuPkdcSylePTS~YfRxdSfoDqaerdiAhJdY70laowPqR3B2wTI~OlplFEQvzTm2rTTTqRnWoPuac4hIMzOApd6b9Z~EHc4z7OE9SRNy1i81XxAAUW5V31TAQhIyuwKpEbRbndfe4s54rHxas4AX1lkdI9SVEYHrypcVUYaT2ElAvr1-PEBEbGurxIEAvyTBDKeer8O5t68JuYNpVUnFO2Yi722U-bqy1Lnt6yjrJ4sfgqZ7HctHcgn342lKCq6AOqz1dIf-sWEbZpuP1638p2qpzmjfpA5cEJow53QBV83r4NRIW4Hc-msNimF2FELlCAg__"],
    sku: 'SS001',
    attributesId: '1',
    attributes: [{
      id: '1',
      color:'white',
      qtd: 10,
      size: 'X'
    },
    {
      id: '2',
      color:'yellow',
      qtd: 1,
      size: 'XL'
    }],
    created_date: new Date(),
    updated_date: new Date()
  },
  {
    id: "3",
    name: "Product 3",
    categoryId: "category1",
    category: {
      id: "category1",
      image_link: 'https://s3-alpha-sig.figma.com/img/3740/8e44/4bdba3a6bef9d68df2d9a06e32e96c61?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eXDN~~SIONEDUSYZ24UpXRHM~QdpUbJ1TDVyH-ZgTLjT5CP94xJPqJoRP48OIVtBzNoROXqjwlDsAnTV1~nI~dCL9wkKC3nqcyoReWK3i53vtA~4moc7r4AXw5eMnabZGZjRl0zP-FwMnkoYMhp4lS2Pkx6zCdZbgIOL0f4tOQZqeQIGjFPzbDP4UeKSxdDXRzYu6jBaeS2knZK0uPyIbsj1~H1tc81llFHX60fyrCqbME3jYDKpxuwMM9JayaHLqBECWayib51991JmATWPgzwFF5UJzEwsP09ahI0ackudCtUxovJx6ic86TYRYQkb91hUALJOJGITSLvIik4YYA__',
      name: "Category 1",
      description: "Description of Category 1",
      created_date: new Date(),
      updated_date: new Date()
    },
    description: "Description of Product 3",
    large_description: "Large description of Product 3",
    price: 70,
    discount_price: 65,
    discount_percent: 7,
    is_new: true,
    image_links: ["https://s3-alpha-sig.figma.com/img/2084/99f3/7c62fb49f7d4a1a6a5dc5959b40150ed?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ax26kfG07AEj0aQqpRNceOuPkdcSylePTS~YfRxdSfoDqaerdiAhJdY70laowPqR3B2wTI~OlplFEQvzTm2rTTTqRnWoPuac4hIMzOApd6b9Z~EHc4z7OE9SRNy1i81XxAAUW5V31TAQhIyuwKpEbRbndfe4s54rHxas4AX1lkdI9SVEYHrypcVUYaT2ElAvr1-PEBEbGurxIEAvyTBDKeer8O5t68JuYNpVUnFO2Yi722U-bqy1Lnt6yjrJ4sfgqZ7HctHcgn342lKCq6AOqz1dIf-sWEbZpuP1638p2qpzmjfpA5cEJow53QBV83r4NRIW4Hc-msNimF2FELlCAg__", "https://s3-alpha-sig.figma.com/img/1f73/e563/4a5dbc0c29efbae1beca6ab40dd9b598?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dihMWIvwdJynA2PxoFMZa1o4j8FlvJ~Piqa2MB8VFAjGa08jH3D-ZfSE0w3RmSM1fAK0Vz3FayZArrlpF~0CE2FJEAtZVYM~jSfJHdFKLVlL5792MkefRL0V~grOAAOy~QmnWEfdcc2RBiX5VP9Mn-JRo~jk~G7rBO0DHTlmjsiq5Ei5qHhs6lcxpLsOgm9I4PxX3Slk2bufy5jjeJoJ9N0fjOR0-mSFUjb0wqTUbjtMl84uecZuVnf7325KDV120XEatf~tjcjMZxEsBaW7j5GHSS69UGNdwb78EZ-yHHmlWS1HLoW~J3Pitc7JLNW1OI0eQRLnD-Zj-SAlUvadpg__"],
    sku: 'SS001',
    attributesId: '1',
    attributes: [{
      id: '1',
      color:'white',
      qtd: 1,
      size: 'X'
    }],
    created_date: new Date(),
    updated_date: new Date()
  },
  {
    id: "4",
    name: "Product 4",
    categoryId: "category3",
    category: {
      id: "category3",
      image_link: 'https://s3-alpha-sig.figma.com/img/3740/8e44/4bdba3a6bef9d68df2d9a06e32e96c61?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eXDN~~SIONEDUSYZ24UpXRHM~QdpUbJ1TDVyH-ZgTLjT5CP94xJPqJoRP48OIVtBzNoROXqjwlDsAnTV1~nI~dCL9wkKC3nqcyoReWK3i53vtA~4moc7r4AXw5eMnabZGZjRl0zP-FwMnkoYMhp4lS2Pkx6zCdZbgIOL0f4tOQZqeQIGjFPzbDP4UeKSxdDXRzYu6jBaeS2knZK0uPyIbsj1~H1tc81llFHX60fyrCqbME3jYDKpxuwMM9JayaHLqBECWayib51991JmATWPgzwFF5UJzEwsP09ahI0ackudCtUxovJx6ic86TYRYQkb91hUALJOJGITSLvIik4YYA__',
      name: "Category 3",
      description: "Description of Category 3",
      created_date: new Date(),
      updated_date: new Date()
    },
    description: "Description of Product 4",
    large_description: "Large description of Product 4",
    price: 80,
    discount_price: 70,
    discount_percent: 12,
    is_new: false,
    image_links: ["https://s3-alpha-sig.figma.com/img/1f73/e563/4a5dbc0c29efbae1beca6ab40dd9b598?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dihMWIvwdJynA2PxoFMZa1o4j8FlvJ~Piqa2MB8VFAjGa08jH3D-ZfSE0w3RmSM1fAK0Vz3FayZArrlpF~0CE2FJEAtZVYM~jSfJHdFKLVlL5792MkefRL0V~grOAAOy~QmnWEfdcc2RBiX5VP9Mn-JRo~jk~G7rBO0DHTlmjsiq5Ei5qHhs6lcxpLsOgm9I4PxX3Slk2bufy5jjeJoJ9N0fjOR0-mSFUjb0wqTUbjtMl84uecZuVnf7325KDV120XEatf~tjcjMZxEsBaW7j5GHSS69UGNdwb78EZ-yHHmlWS1HLoW~J3Pitc7JLNW1OI0eQRLnD-Zj-SAlUvadpg__", "https://s3-alpha-sig.figma.com/img/50f3/12dc/a7c05024ab4e27374edb12195b6559e2?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hnt0WF3oiUMznD5jUYoZdbIKSV-EF~vNosdLinDd9CvogCUL3USUhxhSYaMt6Hivcjqojw1Iaw-GAQaPRunKBX2u-MIjITLknLJH7bqFtdX5VDSFJCywotg3rl56i~XshFSlNgqk67FvoCnIM8u703gc--v84VjU~PiXXV~ITEFgX-7BkiLPgVfst3jRXEwVQqSNxqmAIpc7cwwQOuIvWsc5lApyhJido5yqDAw4sZ64v4FMMZmJ3yqTMN7Y8uKortPFip~GHDLa9fAzV-eUHqaAKhsYW3LXz6gRJHP1YhPHO81Ap5w5g6Uy5BI2BpEhV2xhuKSIJf0TPl9AHBCHfw__"],
    sku: 'SS001',
    attributesId: '1',
    attributes: [{
      id: '1',
      color:'white',
      qtd: 1,
      size: 'X'
    }],
    created_date: new Date(),
    updated_date: new Date()
  },
  {
    id: "5",
    name: "Product 5",
    categoryId: "category2",
    category: {
      id: "category2",
      image_link: 'https://s3-alpha-sig.figma.com/img/3740/8e44/4bdba3a6bef9d68df2d9a06e32e96c61?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eXDN~~SIONEDUSYZ24UpXRHM~QdpUbJ1TDVyH-ZgTLjT5CP94xJPqJoRP48OIVtBzNoROXqjwlDsAnTV1~nI~dCL9wkKC3nqcyoReWK3i53vtA~4moc7r4AXw5eMnabZGZjRl0zP-FwMnkoYMhp4lS2Pkx6zCdZbgIOL0f4tOQZqeQIGjFPzbDP4UeKSxdDXRzYu6jBaeS2knZK0uPyIbsj1~H1tc81llFHX60fyrCqbME3jYDKpxuwMM9JayaHLqBECWayib51991JmATWPgzwFF5UJzEwsP09ahI0ackudCtUxovJx6ic86TYRYQkb91hUALJOJGITSLvIik4YYA__',
      name: "Category 2",
      description: "Description of Category 2",
      created_date: new Date(),
      updated_date: new Date()
    },
    description: "Description of Product 5",
    large_description: "Large description of Product 5",
    price: 90,
    discount_price: 85,
    discount_percent: 6,
    is_new: true,
    image_links: ["https://s3-alpha-sig.figma.com/img/50f3/12dc/a7c05024ab4e27374edb12195b6559e2?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hnt0WF3oiUMznD5jUYoZdbIKSV-EF~vNosdLinDd9CvogCUL3USUhxhSYaMt6Hivcjqojw1Iaw-GAQaPRunKBX2u-MIjITLknLJH7bqFtdX5VDSFJCywotg3rl56i~XshFSlNgqk67FvoCnIM8u703gc--v84VjU~PiXXV~ITEFgX-7BkiLPgVfst3jRXEwVQqSNxqmAIpc7cwwQOuIvWsc5lApyhJido5yqDAw4sZ64v4FMMZmJ3yqTMN7Y8uKortPFip~GHDLa9fAzV-eUHqaAKhsYW3LXz6gRJHP1YhPHO81Ap5w5g6Uy5BI2BpEhV2xhuKSIJf0TPl9AHBCHfw__", "https://s3-alpha-sig.figma.com/img/b609/6926/ea43a4c55f9e28aa3592f17ff47a4303?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CPLh2sTameOlLkGdCAOz~Fy6xUKLeb5FM80tvsbF41IJLWuWh2och1wmfeb7FYiOH4MNlAovpfhce2gn0xCjS5p45RbrJosZbhxBrRGno8k5ePCwV~4Y0P9tgOf2yUmJQ2hEgaOdBt8mmbCh9uKJXxNVF4WP6mbtWOGYpvEhcMAHgIdw~PBv2Rd4z~CZrk22BBt~Sz5OkASpbIwo4iSDeH9wguQglXcrxSepYcwnNgaKHOXMykYXM8OrgWoMcTx2iuN1guHPfC92-GdHmnE04h0NavjFXHgpfFKyvzBnV~IqTN5IG8fpTdHwfbtpQPf6a32qAL6Lkjhva2aWXuh~DA__"],
    sku: 'SS001',
    attributesId: '1',
    attributes: [{
      id: '1',
      color:'white',
      qtd: 1,
      size: 'X'
    }],
    created_date: new Date(),
    updated_date: new Date()
  },
  {
    id: "6",
    name: "Product 6",
    categoryId: "category1",
    category: {
      id: "category1",
      image_link: 'https://s3-alpha-sig.figma.com/img/3740/8e44/4bdba3a6bef9d68df2d9a06e32e96c61?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eXDN~~SIONEDUSYZ24UpXRHM~QdpUbJ1TDVyH-ZgTLjT5CP94xJPqJoRP48OIVtBzNoROXqjwlDsAnTV1~nI~dCL9wkKC3nqcyoReWK3i53vtA~4moc7r4AXw5eMnabZGZjRl0zP-FwMnkoYMhp4lS2Pkx6zCdZbgIOL0f4tOQZqeQIGjFPzbDP4UeKSxdDXRzYu6jBaeS2knZK0uPyIbsj1~H1tc81llFHX60fyrCqbME3jYDKpxuwMM9JayaHLqBECWayib51991JmATWPgzwFF5UJzEwsP09ahI0ackudCtUxovJx6ic86TYRYQkb91hUALJOJGITSLvIik4YYA__',
      name: "Category 1",
      description: "Description of Category 1",
      created_date: new Date(),
      updated_date: new Date()
    },
    description: "Description of Product 6",
    large_description: "Large description of Product 6",
    price: 100,
    discount_price: 95,
    discount_percent: 5,
    is_new: false,
    image_links: ["https://s3-alpha-sig.figma.com/img/b609/6926/ea43a4c55f9e28aa3592f17ff47a4303?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CPLh2sTameOlLkGdCAOz~Fy6xUKLeb5FM80tvsbF41IJLWuWh2och1wmfeb7FYiOH4MNlAovpfhce2gn0xCjS5p45RbrJosZbhxBrRGno8k5ePCwV~4Y0P9tgOf2yUmJQ2hEgaOdBt8mmbCh9uKJXxNVF4WP6mbtWOGYpvEhcMAHgIdw~PBv2Rd4z~CZrk22BBt~Sz5OkASpbIwo4iSDeH9wguQglXcrxSepYcwnNgaKHOXMykYXM8OrgWoMcTx2iuN1guHPfC92-GdHmnE04h0NavjFXHgpfFKyvzBnV~IqTN5IG8fpTdHwfbtpQPf6a32qAL6Lkjhva2aWXuh~DA__", "https://s3-alpha-sig.figma.com/img/8d34/199d/e77ede2f478b2f26210bd264978981f6?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ULfRaLn5nz4ttzBcPeVE1TESHOiZfo9iEihiynR2UPnM9uoSVWJBalJLGzOjFOijoWCM4ZLEC5QP7CvwJAqXfVwEZDs04C-91LcjmLOflF~Uc068gwHYoyxqPFfXvIPK7Y6JiUOwL2FTw72Iyy-OZ09jFkoPCiQMwAPvE~Gi5iJ83lU02X2Gtc42AkUR~eCEfTgiu2BTQkbhWiABpCvrKSj39fPWVWv2ySjrXcELrYptTe~BBUv57rjh159i4noDhq4FLU0SgZ9tFCsKEt~-Q~vI7IBqQhtdU5bccy7Z1CEvHpAfL4IEmGceO-wmCpWPbvKESvw8wTN1HOk3R1oLIg__"],
    sku: 'SS001',
    attributesId: '1',
    attributes: [{
      id: '1',
      color:'white',
      qtd: 1,
      size: 'X'
    }],
    created_date: new Date(),
    updated_date: new Date()
  },
  {
    id: "7",
    name: "Product 7",
    categoryId: "category3",
    category: {
      id: "category3",
      image_link: 'https://s3-alpha-sig.figma.com/img/3740/8e44/4bdba3a6bef9d68df2d9a06e32e96c61?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eXDN~~SIONEDUSYZ24UpXRHM~QdpUbJ1TDVyH-ZgTLjT5CP94xJPqJoRP48OIVtBzNoROXqjwlDsAnTV1~nI~dCL9wkKC3nqcyoReWK3i53vtA~4moc7r4AXw5eMnabZGZjRl0zP-FwMnkoYMhp4lS2Pkx6zCdZbgIOL0f4tOQZqeQIGjFPzbDP4UeKSxdDXRzYu6jBaeS2knZK0uPyIbsj1~H1tc81llFHX60fyrCqbME3jYDKpxuwMM9JayaHLqBECWayib51991JmATWPgzwFF5UJzEwsP09ahI0ackudCtUxovJx6ic86TYRYQkb91hUALJOJGITSLvIik4YYA__',
      name: "Category 3",
      description: "Description of Category 3",
      created_date: new Date(),
      updated_date: new Date()
    },
    description: "Description of Product 7",
    large_description: "Large description of Product 7",
    price: 110,
    discount_price: 105,
    discount_percent: 4,
    is_new: true,
    image_links: ["https://s3-alpha-sig.figma.com/img/8d34/199d/e77ede2f478b2f26210bd264978981f6?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ULfRaLn5nz4ttzBcPeVE1TESHOiZfo9iEihiynR2UPnM9uoSVWJBalJLGzOjFOijoWCM4ZLEC5QP7CvwJAqXfVwEZDs04C-91LcjmLOflF~Uc068gwHYoyxqPFfXvIPK7Y6JiUOwL2FTw72Iyy-OZ09jFkoPCiQMwAPvE~Gi5iJ83lU02X2Gtc42AkUR~eCEfTgiu2BTQkbhWiABpCvrKSj39fPWVWv2ySjrXcELrYptTe~BBUv57rjh159i4noDhq4FLU0SgZ9tFCsKEt~-Q~vI7IBqQhtdU5bccy7Z1CEvHpAfL4IEmGceO-wmCpWPbvKESvw8wTN1HOk3R1oLIg__", "https://s3-alpha-sig.figma.com/img/6028/dfe0/3d98b27fb98ee49958d7089f10d39dfe?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bkhbnFWE1HIIQbN5bKzvLsw-UrDjD42YXGzkLXDFkHN3cV~W-2dzNnl0JaGTVpOaaOukMYLqACQYwsMxN1927P-YLnf0Drn9l8QeQnOjzF4W9W2y6TMWsJrEHMBCdk6pXs4ZLJlYmTNT4VxCseRPifb26fVcpCi~M0KfmXcb8eC8daLHv6vcoWPFjKvnce2kw-RzVBz2r6RUFavT1qwadrH9VjklVhAdS6~~rrwEwWn003mGV7IK-BIUJwhc-nGn6YmWCpi64~Vtl-LFGD1opD~BJI3MHAju9Trv6TPCPQ1QLZiwl-5zQ5fa7mmzQOQApMlV-LU36hEO-CMvKZWM2Q__"],
    sku: 'SS001',
    attributesId: '1',
    attributes: [{
      id: '1',
      color:'white',
      qtd: 1,
      size: 'X'
    }],
    created_date: new Date(),
    updated_date: new Date()
  },
  {
    id: "8",
    name: "Product 8",
    categoryId: "category2",
    category: {
      id: "category2",
      image_link: 'https://s3-alpha-sig.figma.com/img/3740/8e44/4bdba3a6bef9d68df2d9a06e32e96c61?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eXDN~~SIONEDUSYZ24UpXRHM~QdpUbJ1TDVyH-ZgTLjT5CP94xJPqJoRP48OIVtBzNoROXqjwlDsAnTV1~nI~dCL9wkKC3nqcyoReWK3i53vtA~4moc7r4AXw5eMnabZGZjRl0zP-FwMnkoYMhp4lS2Pkx6zCdZbgIOL0f4tOQZqeQIGjFPzbDP4UeKSxdDXRzYu6jBaeS2knZK0uPyIbsj1~H1tc81llFHX60fyrCqbME3jYDKpxuwMM9JayaHLqBECWayib51991JmATWPgzwFF5UJzEwsP09ahI0ackudCtUxovJx6ic86TYRYQkb91hUALJOJGITSLvIik4YYA__',
      name: "Category 2",
      description: "Description of Category 2",
      created_date: new Date(),
      updated_date: new Date()
    },
    description: "Description of Product 8",
    large_description: "Large description of Product 8",
    price: 120,
    discount_price: 115,
    discount_percent: 4,
    is_new: false,
    image_links: ["https://s3-alpha-sig.figma.com/img/6028/dfe0/3d98b27fb98ee49958d7089f10d39dfe?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bkhbnFWE1HIIQbN5bKzvLsw-UrDjD42YXGzkLXDFkHN3cV~W-2dzNnl0JaGTVpOaaOukMYLqACQYwsMxN1927P-YLnf0Drn9l8QeQnOjzF4W9W2y6TMWsJrEHMBCdk6pXs4ZLJlYmTNT4VxCseRPifb26fVcpCi~M0KfmXcb8eC8daLHv6vcoWPFjKvnce2kw-RzVBz2r6RUFavT1qwadrH9VjklVhAdS6~~rrwEwWn003mGV7IK-BIUJwhc-nGn6YmWCpi64~Vtl-LFGD1opD~BJI3MHAju9Trv6TPCPQ1QLZiwl-5zQ5fa7mmzQOQApMlV-LU36hEO-CMvKZWM2Q__", "https://s3-alpha-sig.figma.com/img/4491/a0ea/43eebd52ea72d60650f31030ec4bf7e6?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FrWt31oE85sSOpNqwYmGVUiHxWJbOU8WiEc5f2-zt0Ufhw8IGGWfqBvE88GjnbmdT5Pd0KB1ZNOnYvdIKtqTIGBPOxZMVooeEbzer1cjUbzBqG2OxyKvzXFRE-oJ2ScBq6TEeYlAA6SSzjR-8bIo0vCN6PELHYQi1q8zkkz6n5QatQC5so8eogMiGsInbTGvToY5humB~t1UE-pZMiCnBmzvX9-H3pFuuMH9iDdgNgqiH6jCqwLdh9ivv5144Zit6gZE8qmUpQCqu3EO38IJZeMbQYrb6lvj5cv2QOpf1Y6lwk6GyQSa4CaYQJRfbw4lRL3tIMNWUA-1ZhsSkqCfDg__"],
    sku: 'SS001',
    attributesId: '1',
    attributes: [{
      id: '1',
      color:'white',
      qtd: 1,
      size: 'X'
    }],
    created_date: new Date(),
    updated_date: new Date()
  },
  {
    id: "9",
    name: "Product 9",
    categoryId: "category1",
    category: {
      id: "category1",
      image_link: 'https://s3-alpha-sig.figma.com/img/3740/8e44/4bdba3a6bef9d68df2d9a06e32e96c61?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eXDN~~SIONEDUSYZ24UpXRHM~QdpUbJ1TDVyH-ZgTLjT5CP94xJPqJoRP48OIVtBzNoROXqjwlDsAnTV1~nI~dCL9wkKC3nqcyoReWK3i53vtA~4moc7r4AXw5eMnabZGZjRl0zP-FwMnkoYMhp4lS2Pkx6zCdZbgIOL0f4tOQZqeQIGjFPzbDP4UeKSxdDXRzYu6jBaeS2knZK0uPyIbsj1~H1tc81llFHX60fyrCqbME3jYDKpxuwMM9JayaHLqBECWayib51991JmATWPgzwFF5UJzEwsP09ahI0ackudCtUxovJx6ic86TYRYQkb91hUALJOJGITSLvIik4YYA__',
      name: "Category 1",
      description: "Description of Category 1",
      created_date: new Date(),
      updated_date: new Date()
    },
    description: "Description of Product 9",
    large_description: "Large description of Product 9",
    price: 130,
    discount_price: 125,
    discount_percent: 4,
    is_new: true,
    image_links: ["https://s3-alpha-sig.figma.com/img/4491/a0ea/43eebd52ea72d60650f31030ec4bf7e6?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FrWt31oE85sSOpNqwYmGVUiHxWJbOU8WiEc5f2-zt0Ufhw8IGGWfqBvE88GjnbmdT5Pd0KB1ZNOnYvdIKtqTIGBPOxZMVooeEbzer1cjUbzBqG2OxyKvzXFRE-oJ2ScBq6TEeYlAA6SSzjR-8bIo0vCN6PELHYQi1q8zkkz6n5QatQC5so8eogMiGsInbTGvToY5humB~t1UE-pZMiCnBmzvX9-H3pFuuMH9iDdgNgqiH6jCqwLdh9ivv5144Zit6gZE8qmUpQCqu3EO38IJZeMbQYrb6lvj5cv2QOpf1Y6lwk6GyQSa4CaYQJRfbw4lRL3tIMNWUA-1ZhsSkqCfDg__", "https://s3-alpha-sig.figma.com/img/3ed3/53ed/bdb0310fb379a6b1828809d2c0652533?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hpYFto6zTWWFoeU-T7sEDRMeDgJB11QC5Cu6NkiO5Rjk5qPBBQjXcdDVL24tKMp-wqOLC2FfSV6XqMI0x76qip1RuV~-FuVhzevJ1V1E1U89dzQumDrnkyMsB8kp2UKFmsRXBmdj4B0~Tv~RQqwFnRf9xvBcU5LQGQufBaRVg9FgFlYvQgczKgk4V0znQxZflnUOjNbAs0lDCDKiu9eCEJpSm0AL6owL76zV4u3B82WnIYPC~9Uk0OMpef0Sqdq8cQN~IerN7UcaPH6eL05OVMfliDRvDw7-i4HXt6dkjOWzKSQSQfnImSYl4ZNROuLyhCHmtWBxXUFPSnb1FaC0vg__"],
    sku: 'SS001',
    attributesId: '1',
    attributes: [{
      id: '1',
      color:'white',
      qtd: 1,
      size: 'X'
    }],
    created_date: new Date(),
    updated_date: new Date()
  },
  {
    id: "10",
    name: "Product 10",
    categoryId: "category3",
    category: {
      id: "category3",
      image_link: 'https://s3-alpha-sig.figma.com/img/3740/8e44/4bdba3a6bef9d68df2d9a06e32e96c61?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eXDN~~SIONEDUSYZ24UpXRHM~QdpUbJ1TDVyH-ZgTLjT5CP94xJPqJoRP48OIVtBzNoROXqjwlDsAnTV1~nI~dCL9wkKC3nqcyoReWK3i53vtA~4moc7r4AXw5eMnabZGZjRl0zP-FwMnkoYMhp4lS2Pkx6zCdZbgIOL0f4tOQZqeQIGjFPzbDP4UeKSxdDXRzYu6jBaeS2knZK0uPyIbsj1~H1tc81llFHX60fyrCqbME3jYDKpxuwMM9JayaHLqBECWayib51991JmATWPgzwFF5UJzEwsP09ahI0ackudCtUxovJx6ic86TYRYQkb91hUALJOJGITSLvIik4YYA__',
      name: "Category 3",
      description: "Description of Category 3",
      created_date: new Date(),
      updated_date: new Date()
    },
    description: "Description of Product 10",
    large_description: "Large description of Product 10",
    price: 140,
    discount_price: 135,
    discount_percent: 4,
    is_new: false,
    image_links: ["https://s3-alpha-sig.figma.com/img/3ed3/53ed/bdb0310fb379a6b1828809d2c0652533?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hpYFto6zTWWFoeU-T7sEDRMeDgJB11QC5Cu6NkiO5Rjk5qPBBQjXcdDVL24tKMp-wqOLC2FfSV6XqMI0x76qip1RuV~-FuVhzevJ1V1E1U89dzQumDrnkyMsB8kp2UKFmsRXBmdj4B0~Tv~RQqwFnRf9xvBcU5LQGQufBaRVg9FgFlYvQgczKgk4V0znQxZflnUOjNbAs0lDCDKiu9eCEJpSm0AL6owL76zV4u3B82WnIYPC~9Uk0OMpef0Sqdq8cQN~IerN7UcaPH6eL05OVMfliDRvDw7-i4HXt6dkjOWzKSQSQfnImSYl4ZNROuLyhCHmtWBxXUFPSnb1FaC0vg__", "https://s3-alpha-sig.figma.com/img/2084/99f3/7c62fb49f7d4a1a6a5dc5959b40150ed?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ax26kfG07AEj0aQqpRNceOuPkdcSylePTS~YfRxdSfoDqaerdiAhJdY70laowPqR3B2wTI~OlplFEQvzTm2rTTTqRnWoPuac4hIMzOApd6b9Z~EHc4z7OE9SRNy1i81XxAAUW5V31TAQhIyuwKpEbRbndfe4s54rHxas4AX1lkdI9SVEYHrypcVUYaT2ElAvr1-PEBEbGurxIEAvyTBDKeer8O5t68JuYNpVUnFO2Yi722U-bqy1Lnt6yjrJ4sfgqZ7HctHcgn342lKCq6AOqz1dIf-sWEbZpuP1638p2qpzmjfpA5cEJow53QBV83r4NRIW4Hc-msNimF2FELlCAg__"],
    sku: 'SS001',
    attributesId: '1',
    attributes: [{
      id: '1',
      color:'white',
      qtd: 1,
      size: 'X'
    }],
    created_date: new Date(),
    updated_date: new Date()
  },
  {
    id: "11",
    name: "Product 1",
    categoryId: "category1",
    category: {
      id: "category1",
      image_link: 'https://s3-alpha-sig.figma.com/img/3740/8e44/4bdba3a6bef9d68df2d9a06e32e96c61?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eXDN~~SIONEDUSYZ24UpXRHM~QdpUbJ1TDVyH-ZgTLjT5CP94xJPqJoRP48OIVtBzNoROXqjwlDsAnTV1~nI~dCL9wkKC3nqcyoReWK3i53vtA~4moc7r4AXw5eMnabZGZjRl0zP-FwMnkoYMhp4lS2Pkx6zCdZbgIOL0f4tOQZqeQIGjFPzbDP4UeKSxdDXRzYu6jBaeS2knZK0uPyIbsj1~H1tc81llFHX60fyrCqbME3jYDKpxuwMM9JayaHLqBECWayib51991JmATWPgzwFF5UJzEwsP09ahI0ackudCtUxovJx6ic86TYRYQkb91hUALJOJGITSLvIik4YYA__',
      name: "Category 1",
      description: "Description of Category 1",
      created_date: new Date(),
      updated_date: new Date()
    },
    description: "Description of Product 1",
    large_description: "Large description of Product 1",
    price: 50,
    discount_price: 45,
    discount_percent: 0,
    is_new: true,
    image_links: ["https://s3-alpha-sig.figma.com/img/4491/a0ea/43eebd52ea72d60650f31030ec4bf7e6?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FrWt31oE85sSOpNqwYmGVUiHxWJbOU8WiEc5f2-zt0Ufhw8IGGWfqBvE88GjnbmdT5Pd0KB1ZNOnYvdIKtqTIGBPOxZMVooeEbzer1cjUbzBqG2OxyKvzXFRE-oJ2ScBq6TEeYlAA6SSzjR-8bIo0vCN6PELHYQi1q8zkkz6n5QatQC5so8eogMiGsInbTGvToY5humB~t1UE-pZMiCnBmzvX9-H3pFuuMH9iDdgNgqiH6jCqwLdh9ivv5144Zit6gZE8qmUpQCqu3EO38IJZeMbQYrb6lvj5cv2QOpf1Y6lwk6GyQSa4CaYQJRfbw4lRL3tIMNWUA-1ZhsSkqCfDg__", "https://s3-alpha-sig.figma.com/img/3ed3/53ed/bdb0310fb379a6b1828809d2c0652533?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hpYFto6zTWWFoeU-T7sEDRMeDgJB11QC5Cu6NkiO5Rjk5qPBBQjXcdDVL24tKMp-wqOLC2FfSV6XqMI0x76qip1RuV~-FuVhzevJ1V1E1U89dzQumDrnkyMsB8kp2UKFmsRXBmdj4B0~Tv~RQqwFnRf9xvBcU5LQGQufBaRVg9FgFlYvQgczKgk4V0znQxZflnUOjNbAs0lDCDKiu9eCEJpSm0AL6owL76zV4u3B82WnIYPC~9Uk0OMpef0Sqdq8cQN~IerN7UcaPH6eL05OVMfliDRvDw7-i4HXt6dkjOWzKSQSQfnImSYl4ZNROuLyhCHmtWBxXUFPSnb1FaC0vg__"],
    sku: 'SS001',
    attributesId: '1',
    attributes: [{
      id: '1',
      color:'white',
      qtd: 1,
      size: 'X'
    }],
    created_date: new Date(),
    updated_date: new Date()
  },
  {
    id: "12",
    name: "Product 2",
    categoryId: "category2",
    category: {
      id: "category2",
      image_link: 'https://s3-alpha-sig.figma.com/img/3740/8e44/4bdba3a6bef9d68df2d9a06e32e96c61?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eXDN~~SIONEDUSYZ24UpXRHM~QdpUbJ1TDVyH-ZgTLjT5CP94xJPqJoRP48OIVtBzNoROXqjwlDsAnTV1~nI~dCL9wkKC3nqcyoReWK3i53vtA~4moc7r4AXw5eMnabZGZjRl0zP-FwMnkoYMhp4lS2Pkx6zCdZbgIOL0f4tOQZqeQIGjFPzbDP4UeKSxdDXRzYu6jBaeS2knZK0uPyIbsj1~H1tc81llFHX60fyrCqbME3jYDKpxuwMM9JayaHLqBECWayib51991JmATWPgzwFF5UJzEwsP09ahI0ackudCtUxovJx6ic86TYRYQkb91hUALJOJGITSLvIik4YYA__',
      name: "Category 2",
      description: "Description of Category 2",
      created_date: new Date(),
      updated_date: new Date()
    },
    description: "Description of Product 2",
    large_description: "Large description of Product 2",
    price: 60,
    discount_price: 55,
    discount_percent: 8,
    is_new: false,
    image_links: ["https://s3-alpha-sig.figma.com/img/3ed3/53ed/bdb0310fb379a6b1828809d2c0652533?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hpYFto6zTWWFoeU-T7sEDRMeDgJB11QC5Cu6NkiO5Rjk5qPBBQjXcdDVL24tKMp-wqOLC2FfSV6XqMI0x76qip1RuV~-FuVhzevJ1V1E1U89dzQumDrnkyMsB8kp2UKFmsRXBmdj4B0~Tv~RQqwFnRf9xvBcU5LQGQufBaRVg9FgFlYvQgczKgk4V0znQxZflnUOjNbAs0lDCDKiu9eCEJpSm0AL6owL76zV4u3B82WnIYPC~9Uk0OMpef0Sqdq8cQN~IerN7UcaPH6eL05OVMfliDRvDw7-i4HXt6dkjOWzKSQSQfnImSYl4ZNROuLyhCHmtWBxXUFPSnb1FaC0vg__", "https://s3-alpha-sig.figma.com/img/2084/99f3/7c62fb49f7d4a1a6a5dc5959b40150ed?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ax26kfG07AEj0aQqpRNceOuPkdcSylePTS~YfRxdSfoDqaerdiAhJdY70laowPqR3B2wTI~OlplFEQvzTm2rTTTqRnWoPuac4hIMzOApd6b9Z~EHc4z7OE9SRNy1i81XxAAUW5V31TAQhIyuwKpEbRbndfe4s54rHxas4AX1lkdI9SVEYHrypcVUYaT2ElAvr1-PEBEbGurxIEAvyTBDKeer8O5t68JuYNpVUnFO2Yi722U-bqy1Lnt6yjrJ4sfgqZ7HctHcgn342lKCq6AOqz1dIf-sWEbZpuP1638p2qpzmjfpA5cEJow53QBV83r4NRIW4Hc-msNimF2FELlCAg__"],
    sku: 'SS001',
    attributesId: '1',
    attributes: [{
      id: '1',
      color:'white',
      qtd: 1,
      size: 'X'
    }],
    created_date: new Date(),
    updated_date: new Date()
  },
  {
    id: "13",
    name: "Product 3",
    categoryId: "category1",
    category: {
      id: "category1",
      image_link: 'https://s3-alpha-sig.figma.com/img/3740/8e44/4bdba3a6bef9d68df2d9a06e32e96c61?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eXDN~~SIONEDUSYZ24UpXRHM~QdpUbJ1TDVyH-ZgTLjT5CP94xJPqJoRP48OIVtBzNoROXqjwlDsAnTV1~nI~dCL9wkKC3nqcyoReWK3i53vtA~4moc7r4AXw5eMnabZGZjRl0zP-FwMnkoYMhp4lS2Pkx6zCdZbgIOL0f4tOQZqeQIGjFPzbDP4UeKSxdDXRzYu6jBaeS2knZK0uPyIbsj1~H1tc81llFHX60fyrCqbME3jYDKpxuwMM9JayaHLqBECWayib51991JmATWPgzwFF5UJzEwsP09ahI0ackudCtUxovJx6ic86TYRYQkb91hUALJOJGITSLvIik4YYA__',
      name: "Category 1",
      description: "Description of Category 1",
      created_date: new Date(),
      updated_date: new Date()
    },
    description: "Description of Product 3",
    large_description: "Large description of Product 3",
    price: 70,
    discount_price: 65,
    discount_percent: 7,
    is_new: true,
    image_links: ["https://s3-alpha-sig.figma.com/img/2084/99f3/7c62fb49f7d4a1a6a5dc5959b40150ed?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ax26kfG07AEj0aQqpRNceOuPkdcSylePTS~YfRxdSfoDqaerdiAhJdY70laowPqR3B2wTI~OlplFEQvzTm2rTTTqRnWoPuac4hIMzOApd6b9Z~EHc4z7OE9SRNy1i81XxAAUW5V31TAQhIyuwKpEbRbndfe4s54rHxas4AX1lkdI9SVEYHrypcVUYaT2ElAvr1-PEBEbGurxIEAvyTBDKeer8O5t68JuYNpVUnFO2Yi722U-bqy1Lnt6yjrJ4sfgqZ7HctHcgn342lKCq6AOqz1dIf-sWEbZpuP1638p2qpzmjfpA5cEJow53QBV83r4NRIW4Hc-msNimF2FELlCAg__", "https://s3-alpha-sig.figma.com/img/1f73/e563/4a5dbc0c29efbae1beca6ab40dd9b598?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dihMWIvwdJynA2PxoFMZa1o4j8FlvJ~Piqa2MB8VFAjGa08jH3D-ZfSE0w3RmSM1fAK0Vz3FayZArrlpF~0CE2FJEAtZVYM~jSfJHdFKLVlL5792MkefRL0V~grOAAOy~QmnWEfdcc2RBiX5VP9Mn-JRo~jk~G7rBO0DHTlmjsiq5Ei5qHhs6lcxpLsOgm9I4PxX3Slk2bufy5jjeJoJ9N0fjOR0-mSFUjb0wqTUbjtMl84uecZuVnf7325KDV120XEatf~tjcjMZxEsBaW7j5GHSS69UGNdwb78EZ-yHHmlWS1HLoW~J3Pitc7JLNW1OI0eQRLnD-Zj-SAlUvadpg__"],
    sku: 'SS001',
    attributesId: '1',
    attributes: [{
      id: '1',
      color:'white',
      qtd: 1,
      size: 'X'
    }],
    created_date: new Date(),
    updated_date: new Date()
  },
  {
    id: "14",
    name: "Product 4",
    categoryId: "category3",
    category: {
      id: "category3",
      image_link: 'https://s3-alpha-sig.figma.com/img/3740/8e44/4bdba3a6bef9d68df2d9a06e32e96c61?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eXDN~~SIONEDUSYZ24UpXRHM~QdpUbJ1TDVyH-ZgTLjT5CP94xJPqJoRP48OIVtBzNoROXqjwlDsAnTV1~nI~dCL9wkKC3nqcyoReWK3i53vtA~4moc7r4AXw5eMnabZGZjRl0zP-FwMnkoYMhp4lS2Pkx6zCdZbgIOL0f4tOQZqeQIGjFPzbDP4UeKSxdDXRzYu6jBaeS2knZK0uPyIbsj1~H1tc81llFHX60fyrCqbME3jYDKpxuwMM9JayaHLqBECWayib51991JmATWPgzwFF5UJzEwsP09ahI0ackudCtUxovJx6ic86TYRYQkb91hUALJOJGITSLvIik4YYA__',
      name: "Category 3",
      description: "Description of Category 3",
      created_date: new Date(),
      updated_date: new Date()
    },
    description: "Description of Product 4",
    large_description: "Large description of Product 4",
    price: 80,
    discount_price: 70,
    discount_percent: 12,
    is_new: false,
    image_links: ["https://s3-alpha-sig.figma.com/img/1f73/e563/4a5dbc0c29efbae1beca6ab40dd9b598?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dihMWIvwdJynA2PxoFMZa1o4j8FlvJ~Piqa2MB8VFAjGa08jH3D-ZfSE0w3RmSM1fAK0Vz3FayZArrlpF~0CE2FJEAtZVYM~jSfJHdFKLVlL5792MkefRL0V~grOAAOy~QmnWEfdcc2RBiX5VP9Mn-JRo~jk~G7rBO0DHTlmjsiq5Ei5qHhs6lcxpLsOgm9I4PxX3Slk2bufy5jjeJoJ9N0fjOR0-mSFUjb0wqTUbjtMl84uecZuVnf7325KDV120XEatf~tjcjMZxEsBaW7j5GHSS69UGNdwb78EZ-yHHmlWS1HLoW~J3Pitc7JLNW1OI0eQRLnD-Zj-SAlUvadpg__", "https://s3-alpha-sig.figma.com/img/50f3/12dc/a7c05024ab4e27374edb12195b6559e2?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hnt0WF3oiUMznD5jUYoZdbIKSV-EF~vNosdLinDd9CvogCUL3USUhxhSYaMt6Hivcjqojw1Iaw-GAQaPRunKBX2u-MIjITLknLJH7bqFtdX5VDSFJCywotg3rl56i~XshFSlNgqk67FvoCnIM8u703gc--v84VjU~PiXXV~ITEFgX-7BkiLPgVfst3jRXEwVQqSNxqmAIpc7cwwQOuIvWsc5lApyhJido5yqDAw4sZ64v4FMMZmJ3yqTMN7Y8uKortPFip~GHDLa9fAzV-eUHqaAKhsYW3LXz6gRJHP1YhPHO81Ap5w5g6Uy5BI2BpEhV2xhuKSIJf0TPl9AHBCHfw__"],
    sku: 'SS001',
    attributesId: '1',
    attributes: [{
      id: '1',
      color:'white',
      qtd: 1,
      size: 'X'
    }],
    created_date: new Date(),
    updated_date: new Date()
  },
  {
    id: "15",
    name: "Product 5",
    categoryId: "category2",
    category: {
      id: "category2",
      image_link: 'https://s3-alpha-sig.figma.com/img/3740/8e44/4bdba3a6bef9d68df2d9a06e32e96c61?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eXDN~~SIONEDUSYZ24UpXRHM~QdpUbJ1TDVyH-ZgTLjT5CP94xJPqJoRP48OIVtBzNoROXqjwlDsAnTV1~nI~dCL9wkKC3nqcyoReWK3i53vtA~4moc7r4AXw5eMnabZGZjRl0zP-FwMnkoYMhp4lS2Pkx6zCdZbgIOL0f4tOQZqeQIGjFPzbDP4UeKSxdDXRzYu6jBaeS2knZK0uPyIbsj1~H1tc81llFHX60fyrCqbME3jYDKpxuwMM9JayaHLqBECWayib51991JmATWPgzwFF5UJzEwsP09ahI0ackudCtUxovJx6ic86TYRYQkb91hUALJOJGITSLvIik4YYA__',
      name: "Category 2",
      description: "Description of Category 2",
      created_date: new Date(),
      updated_date: new Date()
    },
    description: "Description of Product 5",
    large_description: "Large description of Product 5",
    price: 90,
    discount_price: 85,
    discount_percent: 6,
    is_new: true,
    image_links: ["https://s3-alpha-sig.figma.com/img/50f3/12dc/a7c05024ab4e27374edb12195b6559e2?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hnt0WF3oiUMznD5jUYoZdbIKSV-EF~vNosdLinDd9CvogCUL3USUhxhSYaMt6Hivcjqojw1Iaw-GAQaPRunKBX2u-MIjITLknLJH7bqFtdX5VDSFJCywotg3rl56i~XshFSlNgqk67FvoCnIM8u703gc--v84VjU~PiXXV~ITEFgX-7BkiLPgVfst3jRXEwVQqSNxqmAIpc7cwwQOuIvWsc5lApyhJido5yqDAw4sZ64v4FMMZmJ3yqTMN7Y8uKortPFip~GHDLa9fAzV-eUHqaAKhsYW3LXz6gRJHP1YhPHO81Ap5w5g6Uy5BI2BpEhV2xhuKSIJf0TPl9AHBCHfw__", "https://s3-alpha-sig.figma.com/img/b609/6926/ea43a4c55f9e28aa3592f17ff47a4303?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CPLh2sTameOlLkGdCAOz~Fy6xUKLeb5FM80tvsbF41IJLWuWh2och1wmfeb7FYiOH4MNlAovpfhce2gn0xCjS5p45RbrJosZbhxBrRGno8k5ePCwV~4Y0P9tgOf2yUmJQ2hEgaOdBt8mmbCh9uKJXxNVF4WP6mbtWOGYpvEhcMAHgIdw~PBv2Rd4z~CZrk22BBt~Sz5OkASpbIwo4iSDeH9wguQglXcrxSepYcwnNgaKHOXMykYXM8OrgWoMcTx2iuN1guHPfC92-GdHmnE04h0NavjFXHgpfFKyvzBnV~IqTN5IG8fpTdHwfbtpQPf6a32qAL6Lkjhva2aWXuh~DA__"],
    sku: 'SS001',
    attributesId: '1',
    attributes: [{
      id: '1',
      color:'white',
      qtd: 1,
      size: 'X'
    }],
    created_date: new Date(),
    updated_date: new Date()
  },
  {
    id: "16",
    name: "Product 6",
    categoryId: "category1",
    category: {
      id: "category1",
      image_link: 'https://s3-alpha-sig.figma.com/img/3740/8e44/4bdba3a6bef9d68df2d9a06e32e96c61?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eXDN~~SIONEDUSYZ24UpXRHM~QdpUbJ1TDVyH-ZgTLjT5CP94xJPqJoRP48OIVtBzNoROXqjwlDsAnTV1~nI~dCL9wkKC3nqcyoReWK3i53vtA~4moc7r4AXw5eMnabZGZjRl0zP-FwMnkoYMhp4lS2Pkx6zCdZbgIOL0f4tOQZqeQIGjFPzbDP4UeKSxdDXRzYu6jBaeS2knZK0uPyIbsj1~H1tc81llFHX60fyrCqbME3jYDKpxuwMM9JayaHLqBECWayib51991JmATWPgzwFF5UJzEwsP09ahI0ackudCtUxovJx6ic86TYRYQkb91hUALJOJGITSLvIik4YYA__',
      name: "Category 1",
      description: "Description of Category 1",
      created_date: new Date(),
      updated_date: new Date()
    },
    description: "Description of Product 6",
    large_description: "Large description of Product 6",
    price: 100,
    discount_price: 95,
    discount_percent: 5,
    is_new: false,
    image_links: ["https://s3-alpha-sig.figma.com/img/b609/6926/ea43a4c55f9e28aa3592f17ff47a4303?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CPLh2sTameOlLkGdCAOz~Fy6xUKLeb5FM80tvsbF41IJLWuWh2och1wmfeb7FYiOH4MNlAovpfhce2gn0xCjS5p45RbrJosZbhxBrRGno8k5ePCwV~4Y0P9tgOf2yUmJQ2hEgaOdBt8mmbCh9uKJXxNVF4WP6mbtWOGYpvEhcMAHgIdw~PBv2Rd4z~CZrk22BBt~Sz5OkASpbIwo4iSDeH9wguQglXcrxSepYcwnNgaKHOXMykYXM8OrgWoMcTx2iuN1guHPfC92-GdHmnE04h0NavjFXHgpfFKyvzBnV~IqTN5IG8fpTdHwfbtpQPf6a32qAL6Lkjhva2aWXuh~DA__", "https://s3-alpha-sig.figma.com/img/8d34/199d/e77ede2f478b2f26210bd264978981f6?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ULfRaLn5nz4ttzBcPeVE1TESHOiZfo9iEihiynR2UPnM9uoSVWJBalJLGzOjFOijoWCM4ZLEC5QP7CvwJAqXfVwEZDs04C-91LcjmLOflF~Uc068gwHYoyxqPFfXvIPK7Y6JiUOwL2FTw72Iyy-OZ09jFkoPCiQMwAPvE~Gi5iJ83lU02X2Gtc42AkUR~eCEfTgiu2BTQkbhWiABpCvrKSj39fPWVWv2ySjrXcELrYptTe~BBUv57rjh159i4noDhq4FLU0SgZ9tFCsKEt~-Q~vI7IBqQhtdU5bccy7Z1CEvHpAfL4IEmGceO-wmCpWPbvKESvw8wTN1HOk3R1oLIg__"],
    sku: 'SS001',
    attributesId: '1',
    attributes: [{
      id: '1',
      color:'white',
      qtd: 1,
      size: 'X'
    }],
    created_date: new Date(),
    updated_date: new Date()
  },
  {
    id: "17",
    name: "Product 7",
    categoryId: "category3",
    category: {
      id: "category3",
      image_link: 'https://s3-alpha-sig.figma.com/img/3740/8e44/4bdba3a6bef9d68df2d9a06e32e96c61?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eXDN~~SIONEDUSYZ24UpXRHM~QdpUbJ1TDVyH-ZgTLjT5CP94xJPqJoRP48OIVtBzNoROXqjwlDsAnTV1~nI~dCL9wkKC3nqcyoReWK3i53vtA~4moc7r4AXw5eMnabZGZjRl0zP-FwMnkoYMhp4lS2Pkx6zCdZbgIOL0f4tOQZqeQIGjFPzbDP4UeKSxdDXRzYu6jBaeS2knZK0uPyIbsj1~H1tc81llFHX60fyrCqbME3jYDKpxuwMM9JayaHLqBECWayib51991JmATWPgzwFF5UJzEwsP09ahI0ackudCtUxovJx6ic86TYRYQkb91hUALJOJGITSLvIik4YYA__',
      name: "Category 3",
      description: "Description of Category 3",
      created_date: new Date(),
      updated_date: new Date()
    },
    description: "Description of Product 7",
    large_description: "Large description of Product 7",
    price: 110,
    discount_price: 105,
    discount_percent: 4,
    is_new: true,
    image_links: ["https://s3-alpha-sig.figma.com/img/8d34/199d/e77ede2f478b2f26210bd264978981f6?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ULfRaLn5nz4ttzBcPeVE1TESHOiZfo9iEihiynR2UPnM9uoSVWJBalJLGzOjFOijoWCM4ZLEC5QP7CvwJAqXfVwEZDs04C-91LcjmLOflF~Uc068gwHYoyxqPFfXvIPK7Y6JiUOwL2FTw72Iyy-OZ09jFkoPCiQMwAPvE~Gi5iJ83lU02X2Gtc42AkUR~eCEfTgiu2BTQkbhWiABpCvrKSj39fPWVWv2ySjrXcELrYptTe~BBUv57rjh159i4noDhq4FLU0SgZ9tFCsKEt~-Q~vI7IBqQhtdU5bccy7Z1CEvHpAfL4IEmGceO-wmCpWPbvKESvw8wTN1HOk3R1oLIg__", "https://s3-alpha-sig.figma.com/img/6028/dfe0/3d98b27fb98ee49958d7089f10d39dfe?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bkhbnFWE1HIIQbN5bKzvLsw-UrDjD42YXGzkLXDFkHN3cV~W-2dzNnl0JaGTVpOaaOukMYLqACQYwsMxN1927P-YLnf0Drn9l8QeQnOjzF4W9W2y6TMWsJrEHMBCdk6pXs4ZLJlYmTNT4VxCseRPifb26fVcpCi~M0KfmXcb8eC8daLHv6vcoWPFjKvnce2kw-RzVBz2r6RUFavT1qwadrH9VjklVhAdS6~~rrwEwWn003mGV7IK-BIUJwhc-nGn6YmWCpi64~Vtl-LFGD1opD~BJI3MHAju9Trv6TPCPQ1QLZiwl-5zQ5fa7mmzQOQApMlV-LU36hEO-CMvKZWM2Q__"],
    sku: 'SS001',
    attributesId: '1',
    attributes: [{
      id: '1',
      color:'white',
      qtd: 1,
      size: 'X'
    }],
    created_date: new Date(),
    updated_date: new Date()
  },
  {
    id: "18",
    name: "Product 8",
    categoryId: "category2",
    category: {
      id: "category2",
      image_link: 'https://s3-alpha-sig.figma.com/img/3740/8e44/4bdba3a6bef9d68df2d9a06e32e96c61?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eXDN~~SIONEDUSYZ24UpXRHM~QdpUbJ1TDVyH-ZgTLjT5CP94xJPqJoRP48OIVtBzNoROXqjwlDsAnTV1~nI~dCL9wkKC3nqcyoReWK3i53vtA~4moc7r4AXw5eMnabZGZjRl0zP-FwMnkoYMhp4lS2Pkx6zCdZbgIOL0f4tOQZqeQIGjFPzbDP4UeKSxdDXRzYu6jBaeS2knZK0uPyIbsj1~H1tc81llFHX60fyrCqbME3jYDKpxuwMM9JayaHLqBECWayib51991JmATWPgzwFF5UJzEwsP09ahI0ackudCtUxovJx6ic86TYRYQkb91hUALJOJGITSLvIik4YYA__',
      name: "Category 2",
      description: "Description of Category 2",
      created_date: new Date(),
      updated_date: new Date()
    },
    description: "Description of Product 8",
    large_description: "Large description of Product 8",
    price: 120,
    discount_price: 115,
    discount_percent: 4,
    is_new: false,
    image_links: ["https://s3-alpha-sig.figma.com/img/6028/dfe0/3d98b27fb98ee49958d7089f10d39dfe?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bkhbnFWE1HIIQbN5bKzvLsw-UrDjD42YXGzkLXDFkHN3cV~W-2dzNnl0JaGTVpOaaOukMYLqACQYwsMxN1927P-YLnf0Drn9l8QeQnOjzF4W9W2y6TMWsJrEHMBCdk6pXs4ZLJlYmTNT4VxCseRPifb26fVcpCi~M0KfmXcb8eC8daLHv6vcoWPFjKvnce2kw-RzVBz2r6RUFavT1qwadrH9VjklVhAdS6~~rrwEwWn003mGV7IK-BIUJwhc-nGn6YmWCpi64~Vtl-LFGD1opD~BJI3MHAju9Trv6TPCPQ1QLZiwl-5zQ5fa7mmzQOQApMlV-LU36hEO-CMvKZWM2Q__", "https://s3-alpha-sig.figma.com/img/4491/a0ea/43eebd52ea72d60650f31030ec4bf7e6?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FrWt31oE85sSOpNqwYmGVUiHxWJbOU8WiEc5f2-zt0Ufhw8IGGWfqBvE88GjnbmdT5Pd0KB1ZNOnYvdIKtqTIGBPOxZMVooeEbzer1cjUbzBqG2OxyKvzXFRE-oJ2ScBq6TEeYlAA6SSzjR-8bIo0vCN6PELHYQi1q8zkkz6n5QatQC5so8eogMiGsInbTGvToY5humB~t1UE-pZMiCnBmzvX9-H3pFuuMH9iDdgNgqiH6jCqwLdh9ivv5144Zit6gZE8qmUpQCqu3EO38IJZeMbQYrb6lvj5cv2QOpf1Y6lwk6GyQSa4CaYQJRfbw4lRL3tIMNWUA-1ZhsSkqCfDg__"],
    sku: 'SS001',
    attributesId: '1',
    attributes: [{
      id: '1',
      color:'white',
      qtd: 1,
      size: 'X'
    }],
    created_date: new Date(),
    updated_date: new Date()
  },
  {
    id: "19",
    name: "Product 9",
    categoryId: "category1",
    category: {
      id: "category1",
      image_link: 'https://s3-alpha-sig.figma.com/img/3740/8e44/4bdba3a6bef9d68df2d9a06e32e96c61?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eXDN~~SIONEDUSYZ24UpXRHM~QdpUbJ1TDVyH-ZgTLjT5CP94xJPqJoRP48OIVtBzNoROXqjwlDsAnTV1~nI~dCL9wkKC3nqcyoReWK3i53vtA~4moc7r4AXw5eMnabZGZjRl0zP-FwMnkoYMhp4lS2Pkx6zCdZbgIOL0f4tOQZqeQIGjFPzbDP4UeKSxdDXRzYu6jBaeS2knZK0uPyIbsj1~H1tc81llFHX60fyrCqbME3jYDKpxuwMM9JayaHLqBECWayib51991JmATWPgzwFF5UJzEwsP09ahI0ackudCtUxovJx6ic86TYRYQkb91hUALJOJGITSLvIik4YYA__',
      name: "Category 1",
      description: "Description of Category 1",
      created_date: new Date(),
      updated_date: new Date()
    },
    description: "Description of Product 9",
    large_description: "Large description of Product 9",
    price: 130,
    discount_price: 125,
    discount_percent: 4,
    is_new: true,
    image_links: ["https://s3-alpha-sig.figma.com/img/4491/a0ea/43eebd52ea72d60650f31030ec4bf7e6?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FrWt31oE85sSOpNqwYmGVUiHxWJbOU8WiEc5f2-zt0Ufhw8IGGWfqBvE88GjnbmdT5Pd0KB1ZNOnYvdIKtqTIGBPOxZMVooeEbzer1cjUbzBqG2OxyKvzXFRE-oJ2ScBq6TEeYlAA6SSzjR-8bIo0vCN6PELHYQi1q8zkkz6n5QatQC5so8eogMiGsInbTGvToY5humB~t1UE-pZMiCnBmzvX9-H3pFuuMH9iDdgNgqiH6jCqwLdh9ivv5144Zit6gZE8qmUpQCqu3EO38IJZeMbQYrb6lvj5cv2QOpf1Y6lwk6GyQSa4CaYQJRfbw4lRL3tIMNWUA-1ZhsSkqCfDg__", "https://s3-alpha-sig.figma.com/img/3ed3/53ed/bdb0310fb379a6b1828809d2c0652533?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hpYFto6zTWWFoeU-T7sEDRMeDgJB11QC5Cu6NkiO5Rjk5qPBBQjXcdDVL24tKMp-wqOLC2FfSV6XqMI0x76qip1RuV~-FuVhzevJ1V1E1U89dzQumDrnkyMsB8kp2UKFmsRXBmdj4B0~Tv~RQqwFnRf9xvBcU5LQGQufBaRVg9FgFlYvQgczKgk4V0znQxZflnUOjNbAs0lDCDKiu9eCEJpSm0AL6owL76zV4u3B82WnIYPC~9Uk0OMpef0Sqdq8cQN~IerN7UcaPH6eL05OVMfliDRvDw7-i4HXt6dkjOWzKSQSQfnImSYl4ZNROuLyhCHmtWBxXUFPSnb1FaC0vg__"],
    sku: 'SS001',
    attributesId: '1',
    attributes: [{
      id: '1',
      color:'white',
      qtd: 1,
      size: 'X'
    }],
    created_date: new Date(),
    updated_date: new Date()
  },
  {
    id: "20",
    name: "Product 10",
    categoryId: "category3",
    category: {
      id: "category3",
      image_link: 'https://s3-alpha-sig.figma.com/img/3740/8e44/4bdba3a6bef9d68df2d9a06e32e96c61?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eXDN~~SIONEDUSYZ24UpXRHM~QdpUbJ1TDVyH-ZgTLjT5CP94xJPqJoRP48OIVtBzNoROXqjwlDsAnTV1~nI~dCL9wkKC3nqcyoReWK3i53vtA~4moc7r4AXw5eMnabZGZjRl0zP-FwMnkoYMhp4lS2Pkx6zCdZbgIOL0f4tOQZqeQIGjFPzbDP4UeKSxdDXRzYu6jBaeS2knZK0uPyIbsj1~H1tc81llFHX60fyrCqbME3jYDKpxuwMM9JayaHLqBECWayib51991JmATWPgzwFF5UJzEwsP09ahI0ackudCtUxovJx6ic86TYRYQkb91hUALJOJGITSLvIik4YYA__',
      name: "Category 3",
      description: "Description of Category 3",
      created_date: new Date(),
      updated_date: new Date()
    },
    description: "Description of Product 10",
    large_description: "Large description of Product 10",
    price: 140,
    discount_price: 135,
    discount_percent: 4,
    is_new: false,
    image_links: ["https://s3-alpha-sig.figma.com/img/3ed3/53ed/bdb0310fb379a6b1828809d2c0652533?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hpYFto6zTWWFoeU-T7sEDRMeDgJB11QC5Cu6NkiO5Rjk5qPBBQjXcdDVL24tKMp-wqOLC2FfSV6XqMI0x76qip1RuV~-FuVhzevJ1V1E1U89dzQumDrnkyMsB8kp2UKFmsRXBmdj4B0~Tv~RQqwFnRf9xvBcU5LQGQufBaRVg9FgFlYvQgczKgk4V0znQxZflnUOjNbAs0lDCDKiu9eCEJpSm0AL6owL76zV4u3B82WnIYPC~9Uk0OMpef0Sqdq8cQN~IerN7UcaPH6eL05OVMfliDRvDw7-i4HXt6dkjOWzKSQSQfnImSYl4ZNROuLyhCHmtWBxXUFPSnb1FaC0vg__", "https://s3-alpha-sig.figma.com/img/2084/99f3/7c62fb49f7d4a1a6a5dc5959b40150ed?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ax26kfG07AEj0aQqpRNceOuPkdcSylePTS~YfRxdSfoDqaerdiAhJdY70laowPqR3B2wTI~OlplFEQvzTm2rTTTqRnWoPuac4hIMzOApd6b9Z~EHc4z7OE9SRNy1i81XxAAUW5V31TAQhIyuwKpEbRbndfe4s54rHxas4AX1lkdI9SVEYHrypcVUYaT2ElAvr1-PEBEbGurxIEAvyTBDKeer8O5t68JuYNpVUnFO2Yi722U-bqy1Lnt6yjrJ4sfgqZ7HctHcgn342lKCq6AOqz1dIf-sWEbZpuP1638p2qpzmjfpA5cEJow53QBV83r4NRIW4Hc-msNimF2FELlCAg__"],
    sku: 'SS001',
    attributesId: '1',
    attributes: [{
      id: '1',
      color:'white',
      qtd: 1,
      size: 'X'
    }],
    created_date: new Date(),
    updated_date: new Date()
  }
];

export const productsMockUpPag: ProductPag = {
  products: productsMockUp.slice(0, 16),
  number_of_pages: 5,
  page: 1
}

