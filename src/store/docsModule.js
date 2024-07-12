export const docsModule = {
  state: () => ({
    numberOfShares: 0,
    isAuth: true,
    currentSectionId: 0,
    currentPartId: 0,
    currentArticle: '',
    currentNavigationHook: [],

    navigationHooks: [
      {
        'id': 0,
        'parts': [
          ['This is first company case', 'What is this', 'And talking about this', "But we also can't omit this", 'And finishing this part'],
          ['Our second company cas', 'What is this', 'And talking about this', "But we also can't omit this", 'And finishing this part'],
          ['Here is the third company', 'What is this', 'And talking about this', "But we also can't omit this", 'And finishing this part'],
          ['Fourth company case', 'What is this', 'And talking about this', "But we also can't omit this", 'And finishing this part'],
          ['Fifth case', 'What is this', 'And talking about this', "But we also can't omit this", 'And finishing this part']

        ]
      },
      {
        'id': 1,
        'parts': [
          ['Web3', 'What is this', 'And talking about this', "But we also can't omit this", 'And finishing this part'],
          ['Web2', 'What is this', 'And talking about this', "But we also can't omit this", 'And finishing this part'],
          ['Telegram', 'What is this', 'And talking about this', "But we also can't omit this", 'And finishing this part'],
          ['Softs', 'What is this', 'And talking about this', "But we also can't omit this", 'And finishing this part'],
          ['ERP', 'What is this', 'And talking about this', "But we also can't omit this", 'And finishing this part'],
        ]
      },
      {
        'id': 2,
        'parts': [
          ['Who we are?', 'What is this', 'And talking about this', "But we also can't omit this", 'And finishing this part'],
          ['Us compared to others', 'What is this', 'And talking about this', "But we also can't omit this", 'And finishing this part'],
          ['Our blog', 'What is this', 'And talking about this', "But we also can't omit this", 'And finishing this part'],
          ['Why we are the', 'What is this', 'And talking about this', "But we also can't omit this", 'And finishing this part'],
          ['How to join us', 'What is this', 'And talking about this', "But we also can't omit this", 'And finishing this part']
        ]
      },


    ],

    sectionParts: [
      {
        'id': 0,
        'parts': [
          { 'id': 0, 'name': 'This is first company case' },
          { 'id': 1, 'name': 'Our second company case' },
          { 'id': 2, 'name': 'Here is the third company' },
          { 'id': 3, 'name': 'Fourth company case' },
          { 'id': 4, 'name': 'Fifth case, fifth win' },
        ]
      },
      {
        'id': 1,
        'parts': [
          { 'id': 0, 'name': 'Web3' },
          { 'id': 1, 'name': 'Web2' },
          { 'id': 2, 'name': 'Telegram' },
          { 'id': 3, 'name': 'Softs' },
          { 'id': 4, 'name': 'ERP' },
        ]
      },
      {
        'id': 2,
        'parts': [
          { 'id': 0, 'name': 'Who we are?' },
          { 'id': 1, 'name': 'Us compared to others' },
          { 'id': 2, 'name': 'Our blog' },
          { 'id': 3, 'name': 'Why we are the best?' },
          { 'id': 4, 'name': 'How to join us?' },
        ]
      }
    ],

    currentOnPageInfo: '',

    onPage: [
      {
        'id': 0,
        'parts': [
          {
            'id': 0
            , 'info': `
- Introduction 
- Main part 
- Talking about this
- Conclusion for first company`
          },
          {
            'id': 1,
            'info': `
- Introduction 
- Main part 
- Talking about this
- Conclusion for second company`
          },

          {
            'id': 2,
            'info': `
- Introduction 
- Main part 
- Talking about this
- Conclusion for third company`
          },
          {
            'id': 3,
            'info': `
- Introduction 
- Main part 
- Talking about this
- Conclusion for fourth company`
          },

          {
            'id': 4,
            'info': `
- Introduction 
- Main part 
- Talking about this
- Conclusion for fifth company`},

        ]
      },
      {
        'id': 1,
        'parts': [
          {
            'id': 0
            , 'info': `
- Introduction 
- Main part 
- Talking about this
- Conclusion web3`
          },
          {
            'id': 1,
            'info': `
- Introduction 
- Main part 
- Talking about this
- Conclusion web2`
          },

          {
            'id': 2,
            'info': `
- Introduction 
- Main part 
- Talking about this
- Conclusion telegram`
          },
          {
            'id': 3,
            'info': `
- Introduction 
- Main part 
- Talking about this
- Conclusion softs`
          },

          {
            'id': 4,
            'info': `
- Introduction 
- Main part 
- Talking about this
- Conclusion erp`},

        ]
      },
      {
        'id': 2,
        'parts': [
          {
            'id': 0
            , 'info': `
- Introduction 
- Main part 
- Talking about this
- Conclusion who we are`
          },
          {
            'id': 1,
            'info': `
- Introduction 
- Main part 
- Talking about this
- Conclusion comparison`
          },

          {
            'id': 2,
            'info': `
- Introduction 
- Main part 
- Talking about this
- Conclusion our blog`
          },
          {
            'id': 3,
            'info': `
- Introduction 
- Main part 
- Talking about this
- Conclusion why the best`
          },

          {
            'id': 4,
            'info': `
- Introduction 
- Main part 
- Talking about this
- Conclusion how to join`},

        ]
      }
    ],
    articles: [
      {
        'id': 0,
        'parts': [
          {
            'id': 0, 'msg': `

# This is first company case

### Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis earum quod molestiae itaque cupiditate deleniti vitae inventore impedit numquam qui illo autem, minima quia quidem nostrum **veritatis quibusdam officiis ex?**

## What is this?

### Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, fuga ab? Labore quod sequi, obcaecati unde eaque consectetur sunt? Nam facilis nostrum praesentium, velit accusamus consectetur minima repellat ut eligendi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore animi ut velit suscipit. Ratione illumdolore exercitationem, possimus optio cupiditate modi sunt reprehenderit rem eius provident? Excepturi voluptates esse odio.

## And talking about this.

### Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde dicta quisquam exercitationem molestiae, fugit impedit corrupti temporibus facere culpa dolorum officiis quas, dolores ea neque ducimus.

## But we also can't omit this: 

### Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis voluptatibus ipsa magni eum laborum nobis,nulla ab reprehenderit animi possimus laboriosam quaerat ullam inventore excepturi temporibus praesentium doloribus in. Ulla. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste amet magnam natus, veritatis unde voluptatibus nostrum perferendis? Harum, voluptates temporibus, consectetur aliquid maiores debitis nam distinctio impedit assumenda fuga deserunt!

- The first case
- The second case
- The third case
- And of course this

## And finishing This part.

### Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia esse, quis voluptatem blanditiis quidem accusamus modi odio consequatur laborum voluptas in non cum fugit rerum quasi qui, repellat ipsam iure! Lorem ipsum dolor sit amet consectetur adipisicing elit. Et autem harum earum sit sunt iusto blanditiis id, odit minus voluptatum provident? Laborum consectetur sint eius illo assumenda. Ea, odit autem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas atque ab explicabo iusto tempore, quos reiciendis suscipit similique iure excepturi ratione, qui eius eligendi repellat magnam minus aliquid eos quia?
` },
          {
            'id': 1, 'msg': `

# Our second company case

### Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis earum quod molestiae itaque cupiditate deleniti vitae inventore impedit numquam qui illo autem, minima quia quidem nostrum **veritatis quibusdam officiis ex?**

## What is this?

### Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, fuga ab? Labore quod sequi, obcaecati unde eaque consectetur sunt? Nam facilis nostrum praesentium, velit accusamus consectetur minima repellat ut eligendi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore animi ut velit suscipit. Ratione illumdolore exercitationem, possimus optio cupiditate modi sunt reprehenderit rem eius provident? Excepturi voluptates esse odio.

## And talking about this.

### Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde dicta quisquam exercitationem molestiae, fugit impedit corrupti temporibus facere culpa dolorum officiis quas, dolores ea neque ducimus.

## But we also can't omit this: 

### Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis voluptatibus ipsa magni eum laborum nobis,nulla ab reprehenderit animi possimus laboriosam quaerat ullam inventore excepturi temporibus praesentium doloribus in. Ulla. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste amet magnam natus, veritatis unde voluptatibus nostrum perferendis? Harum, voluptates temporibus, consectetur aliquid maiores debitis nam distinctio impedit assumenda fuga deserunt!

- The first case
- The second case
- The third case
- And of course this

## And finishing This part.

### Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia esse, quis voluptatem blanditiis quidem accusamus modi odio consequatur laborum voluptas in non cum fugit rerum quasi qui, repellat ipsam iure! Lorem ipsum dolor sit amet consectetur adipisicing elit. Et autem harum earum sit sunt iusto blanditiis id, odit minus voluptatum provident? Laborum consectetur sint eius illo assumenda. Ea, odit autem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas atque ab explicabo iusto tempore, quos reiciendis suscipit similique iure excepturi ratione, qui eius eligendi repellat magnam minus aliquid eos quia?
`  },
          {
            'id': 2, 'msg': `

# Here is the third company

### Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis earum quod molestiae itaque cupiditate deleniti vitae inventore impedit numquam qui illo autem, minima quia quidem nostrum **veritatis quibusdam officiis ex?**

## What is this?

### Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, fuga ab? Labore quod sequi, obcaecati unde eaque consectetur sunt? Nam facilis nostrum praesentium, velit accusamus consectetur minima repellat ut eligendi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore animi ut velit suscipit. Ratione illumdolore exercitationem, possimus optio cupiditate modi sunt reprehenderit rem eius provident? Excepturi voluptates esse odio.

## And talking about this.

### Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde dicta quisquam exercitationem molestiae, fugit impedit corrupti temporibus facere culpa dolorum officiis quas, dolores ea neque ducimus.

## But we also can't omit this: 

### Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis voluptatibus ipsa magni eum laborum nobis,nulla ab reprehenderit animi possimus laboriosam quaerat ullam inventore excepturi temporibus praesentium doloribus in. Ulla. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste amet magnam natus, veritatis unde voluptatibus nostrum perferendis? Harum, voluptates temporibus, consectetur aliquid maiores debitis nam distinctio impedit assumenda fuga deserunt!

- The first case
- The second case
- The third case
- And of course this

## And finishing This part.

### Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia esse, quis voluptatem blanditiis quidem accusamus modi odio consequatur laborum voluptas in non cum fugit rerum quasi qui, repellat ipsam iure! Lorem ipsum dolor sit amet consectetur adipisicing elit. Et autem harum earum sit sunt iusto blanditiis id, odit minus voluptatum provident? Laborum consectetur sint eius illo assumenda. Ea, odit autem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas atque ab explicabo iusto tempore, quos reiciendis suscipit similique iure excepturi ratione, qui eius eligendi repellat magnam minus aliquid eos quia?
`  },
          {
            'id': 3, 'msg': `

# Fourth company case

### Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis earum quod molestiae itaque cupiditate deleniti vitae inventore impedit numquam qui illo autem, minima quia quidem nostrum **veritatis quibusdam officiis ex?**

## What is this?

### Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, fuga ab? Labore quod sequi, obcaecati unde eaque consectetur sunt? Nam facilis nostrum praesentium, velit accusamus consectetur minima repellat ut eligendi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore animi ut velit suscipit. Ratione illumdolore exercitationem, possimus optio cupiditate modi sunt reprehenderit rem eius provident? Excepturi voluptates esse odio.

## And talking about this.

### Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde dicta quisquam exercitationem molestiae, fugit impedit corrupti temporibus facere culpa dolorum officiis quas, dolores ea neque ducimus.

## But we also can't omit this: 

### Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis voluptatibus ipsa magni eum laborum nobis,nulla ab reprehenderit animi possimus laboriosam quaerat ullam inventore excepturi temporibus praesentium doloribus in. Ulla. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste amet magnam natus, veritatis unde voluptatibus nostrum perferendis? Harum, voluptates temporibus, consectetur aliquid maiores debitis nam distinctio impedit assumenda fuga deserunt!

- The first case
- The second case
- The third case
- And of course this

## And finishing This part.

### Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia esse, quis voluptatem blanditiis quidem accusamus modi odio consequatur laborum voluptas in non cum fugit rerum quasi qui, repellat ipsam iure! Lorem ipsum dolor sit amet consectetur adipisicing elit. Et autem harum earum sit sunt iusto blanditiis id, odit minus voluptatum provident? Laborum consectetur sint eius illo assumenda. Ea, odit autem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas atque ab explicabo iusto tempore, quos reiciendis suscipit similique iure excepturi ratione, qui eius eligendi repellat magnam minus aliquid eos quia?
`  },
          {
            'id': 4, 'msg': `

# Fifth case, fifth win

### Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis earum quod molestiae itaque cupiditate deleniti vitae inventore impedit numquam qui illo autem, minima quia quidem nostrum **veritatis quibusdam officiis ex?**

## What is this?

### Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, fuga ab? Labore quod sequi, obcaecati unde eaque consectetur sunt? Nam facilis nostrum praesentium, velit accusamus consectetur minima repellat ut eligendi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore animi ut velit suscipit. Ratione illumdolore exercitationem, possimus optio cupiditate modi sunt reprehenderit rem eius provident? Excepturi voluptates esse odio.

## And talking about this.

### Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde dicta quisquam exercitationem molestiae, fugit impedit corrupti temporibus facere culpa dolorum officiis quas, dolores ea neque ducimus.

## But we also can't omit this: 

### Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis voluptatibus ipsa magni eum laborum nobis,nulla ab reprehenderit animi possimus laboriosam quaerat ullam inventore excepturi temporibus praesentium doloribus in. Ulla. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste amet magnam natus, veritatis unde voluptatibus nostrum perferendis? Harum, voluptates temporibus, consectetur aliquid maiores debitis nam distinctio impedit assumenda fuga deserunt!

- The first case
- The second case
- The third case
- And of course this

## And finishing This part.

### Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia esse, quis voluptatem blanditiis quidem accusamus modi odio consequatur laborum voluptas in non cum fugit rerum quasi qui, repellat ipsam iure! Lorem ipsum dolor sit amet consectetur adipisicing elit. Et autem harum earum sit sunt iusto blanditiis id, odit minus voluptatum provident? Laborum consectetur sint eius illo assumenda. Ea, odit autem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas atque ab explicabo iusto tempore, quos reiciendis suscipit similique iure excepturi ratione, qui eius eligendi repellat magnam minus aliquid eos quia?
` },
        ]
      },
      {
        'id': 1,
        'parts': [
          {
            'id': 0, 'msg': `

# Web3

### Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis earum quod molestiae itaque cupiditate deleniti vitae inventore impedit numquam qui illo autem, minima quia quidem nostrum **veritatis quibusdam officiis ex?**

## What is this?

### Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, fuga ab? Labore quod sequi, obcaecati unde eaque consectetur sunt? Nam facilis nostrum praesentium, velit accusamus consectetur minima repellat ut eligendi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore animi ut velit suscipit. Ratione illumdolore exercitationem, possimus optio cupiditate modi sunt reprehenderit rem eius provident? Excepturi voluptates esse odio.

## And talking about this.

### Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde dicta quisquam exercitationem molestiae, fugit impedit corrupti temporibus facere culpa dolorum officiis quas, dolores ea neque ducimus.

## But we also can't omit this: 

### Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis voluptatibus ipsa magni eum laborum nobis,nulla ab reprehenderit animi possimus laboriosam quaerat ullam inventore excepturi temporibus praesentium doloribus in. Ulla. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste amet magnam natus, veritatis unde voluptatibus nostrum perferendis? Harum, voluptates temporibus, consectetur aliquid maiores debitis nam distinctio impedit assumenda fuga deserunt!

- The first case
- The second case
- The third case
- And of course this

## And finishing This part.

### Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia esse, quis voluptatem blanditiis quidem accusamus modi odio consequatur laborum voluptas in non cum fugit rerum quasi qui, repellat ipsam iure! Lorem ipsum dolor sit amet consectetur adipisicing elit. Et autem harum earum sit sunt iusto blanditiis id, odit minus voluptatum provident? Laborum consectetur sint eius illo assumenda. Ea, odit autem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas atque ab explicabo iusto tempore, quos reiciendis suscipit similique iure excepturi ratione, qui eius eligendi repellat magnam minus aliquid eos quia?
` },
          {
            'id': 1, 'msg': `

# Web2

### Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis earum quod molestiae itaque cupiditate deleniti vitae inventore impedit numquam qui illo autem, minima quia quidem nostrum **veritatis quibusdam officiis ex?**

## What is this?

### Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, fuga ab? Labore quod sequi, obcaecati unde eaque consectetur sunt? Nam facilis nostrum praesentium, velit accusamus consectetur minima repellat ut eligendi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore animi ut velit suscipit. Ratione illumdolore exercitationem, possimus optio cupiditate modi sunt reprehenderit rem eius provident? Excepturi voluptates esse odio.

## And talking about this.

### Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde dicta quisquam exercitationem molestiae, fugit impedit corrupti temporibus facere culpa dolorum officiis quas, dolores ea neque ducimus.

## But we also can't omit this: 

### Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis voluptatibus ipsa magni eum laborum nobis,nulla ab reprehenderit animi possimus laboriosam quaerat ullam inventore excepturi temporibus praesentium doloribus in. Ulla. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste amet magnam natus, veritatis unde voluptatibus nostrum perferendis? Harum, voluptates temporibus, consectetur aliquid maiores debitis nam distinctio impedit assumenda fuga deserunt!

- The first case
- The second case
- The third case
- And of course this

## And finishing This part.

### Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia esse, quis voluptatem blanditiis quidem accusamus modi odio consequatur laborum voluptas in non cum fugit rerum quasi qui, repellat ipsam iure! Lorem ipsum dolor sit amet consectetur adipisicing elit. Et autem harum earum sit sunt iusto blanditiis id, odit minus voluptatum provident? Laborum consectetur sint eius illo assumenda. Ea, odit autem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas atque ab explicabo iusto tempore, quos reiciendis suscipit similique iure excepturi ratione, qui eius eligendi repellat magnam minus aliquid eos quia?
` },
          {
            'id': 2, 'msg': `

# Telegram

### Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis earum quod molestiae itaque cupiditate deleniti vitae inventore impedit numquam qui illo autem, minima quia quidem nostrum **veritatis quibusdam officiis ex?**

## What is this?

### Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, fuga ab? Labore quod sequi, obcaecati unde eaque consectetur sunt? Nam facilis nostrum praesentium, velit accusamus consectetur minima repellat ut eligendi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore animi ut velit suscipit. Ratione illumdolore exercitationem, possimus optio cupiditate modi sunt reprehenderit rem eius provident? Excepturi voluptates esse odio.

## And talking about this.

### Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde dicta quisquam exercitationem molestiae, fugit impedit corrupti temporibus facere culpa dolorum officiis quas, dolores ea neque ducimus.

## But we also can't omit this: 

### Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis voluptatibus ipsa magni eum laborum nobis,nulla ab reprehenderit animi possimus laboriosam quaerat ullam inventore excepturi temporibus praesentium doloribus in. Ulla. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste amet magnam natus, veritatis unde voluptatibus nostrum perferendis? Harum, voluptates temporibus, consectetur aliquid maiores debitis nam distinctio impedit assumenda fuga deserunt!

- The first case
- The second case
- The third case
- And of course this

## And finishing This part.

### Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia esse, quis voluptatem blanditiis quidem accusamus modi odio consequatur laborum voluptas in non cum fugit rerum quasi qui, repellat ipsam iure! Lorem ipsum dolor sit amet consectetur adipisicing elit. Et autem harum earum sit sunt iusto blanditiis id, odit minus voluptatum provident? Laborum consectetur sint eius illo assumenda. Ea, odit autem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas atque ab explicabo iusto tempore, quos reiciendis suscipit similique iure excepturi ratione, qui eius eligendi repellat magnam minus aliquid eos quia?
` },
          {
            'id': 3, 'msg': `

# Softs

### Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis earum quod molestiae itaque cupiditate deleniti vitae inventore impedit numquam qui illo autem, minima quia quidem nostrum **veritatis quibusdam officiis ex?**

## What is this?

### Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, fuga ab? Labore quod sequi, obcaecati unde eaque consectetur sunt? Nam facilis nostrum praesentium, velit accusamus consectetur minima repellat ut eligendi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore animi ut velit suscipit. Ratione illumdolore exercitationem, possimus optio cupiditate modi sunt reprehenderit rem eius provident? Excepturi voluptates esse odio.

## And talking about this.

### Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde dicta quisquam exercitationem molestiae, fugit impedit corrupti temporibus facere culpa dolorum officiis quas, dolores ea neque ducimus.

## But we also can't omit this: 

### Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis voluptatibus ipsa magni eum laborum nobis,nulla ab reprehenderit animi possimus laboriosam quaerat ullam inventore excepturi temporibus praesentium doloribus in. Ulla. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste amet magnam natus, veritatis unde voluptatibus nostrum perferendis? Harum, voluptates temporibus, consectetur aliquid maiores debitis nam distinctio impedit assumenda fuga deserunt!

- The first case
- The second case
- The third case
- And of course this

## And finishing This part.

### Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia esse, quis voluptatem blanditiis quidem accusamus modi odio consequatur laborum voluptas in non cum fugit rerum quasi qui, repellat ipsam iure! Lorem ipsum dolor sit amet consectetur adipisicing elit. Et autem harum earum sit sunt iusto blanditiis id, odit minus voluptatum provident? Laborum consectetur sint eius illo assumenda. Ea, odit autem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas atque ab explicabo iusto tempore, quos reiciendis suscipit similique iure excepturi ratione, qui eius eligendi repellat magnam minus aliquid eos quia?
`  },
          {
            'id': 4, 'msg': `

# ERP

### Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis earum quod molestiae itaque cupiditate deleniti vitae inventore impedit numquam qui illo autem, minima quia quidem nostrum **veritatis quibusdam officiis ex?**

## What is this?

### Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, fuga ab? Labore quod sequi, obcaecati unde eaque consectetur sunt? Nam facilis nostrum praesentium, velit accusamus consectetur minima repellat ut eligendi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore animi ut velit suscipit. Ratione illumdolore exercitationem, possimus optio cupiditate modi sunt reprehenderit rem eius provident? Excepturi voluptates esse odio.

## And talking about this.

### Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde dicta quisquam exercitationem molestiae, fugit impedit corrupti temporibus facere culpa dolorum officiis quas, dolores ea neque ducimus.

## But we also can't omit this: 

### Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis voluptatibus ipsa magni eum laborum nobis,nulla ab reprehenderit animi possimus laboriosam quaerat ullam inventore excepturi temporibus praesentium doloribus in. Ulla. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste amet magnam natus, veritatis unde voluptatibus nostrum perferendis? Harum, voluptates temporibus, consectetur aliquid maiores debitis nam distinctio impedit assumenda fuga deserunt!

- The first case
- The second case
- The third case
- And of course this

## And finishing This part.

### Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia esse, quis voluptatem blanditiis quidem accusamus modi odio consequatur laborum voluptas in non cum fugit rerum quasi qui, repellat ipsam iure! Lorem ipsum dolor sit amet consectetur adipisicing elit. Et autem harum earum sit sunt iusto blanditiis id, odit minus voluptatum provident? Laborum consectetur sint eius illo assumenda. Ea, odit autem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas atque ab explicabo iusto tempore, quos reiciendis suscipit similique iure excepturi ratione, qui eius eligendi repellat magnam minus aliquid eos quia?
` },
        ]
      },
      {
        'id': 2,
        'parts': [
          {
            'id': 0, 'msg': `

# Who we are?

### Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis earum quod molestiae itaque cupiditate deleniti vitae inventore impedit numquam qui illo autem, minima quia quidem nostrum **veritatis quibusdam officiis ex?**

## What is this?

### Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, fuga ab? Labore quod sequi, obcaecati unde eaque consectetur sunt? Nam facilis nostrum praesentium, velit accusamus consectetur minima repellat ut eligendi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore animi ut velit suscipit. Ratione illumdolore exercitationem, possimus optio cupiditate modi sunt reprehenderit rem eius provident? Excepturi voluptates esse odio.

## And talking about this.

### Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde dicta quisquam exercitationem molestiae, fugit impedit corrupti temporibus facere culpa dolorum officiis quas, dolores ea neque ducimus.

## But we also can't omit this: 

### Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis voluptatibus ipsa magni eum laborum nobis,nulla ab reprehenderit animi possimus laboriosam quaerat ullam inventore excepturi temporibus praesentium doloribus in. Ulla. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste amet magnam natus, veritatis unde voluptatibus nostrum perferendis? Harum, voluptates temporibus, consectetur aliquid maiores debitis nam distinctio impedit assumenda fuga deserunt!

- The first case
- The second case
- The third case
- And of course this

## And finishing This part.

### Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia esse, quis voluptatem blanditiis quidem accusamus modi odio consequatur laborum voluptas in non cum fugit rerum quasi qui, repellat ipsam iure! Lorem ipsum dolor sit amet consectetur adipisicing elit. Et autem harum earum sit sunt iusto blanditiis id, odit minus voluptatum provident? Laborum consectetur sint eius illo assumenda. Ea, odit autem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas atque ab explicabo iusto tempore, quos reiciendis suscipit similique iure excepturi ratione, qui eius eligendi repellat magnam minus aliquid eos quia?
` },
          {
            'id': 1, 'msg': `

# Us compared to others

### Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis earum quod molestiae itaque cupiditate deleniti vitae inventore impedit numquam qui illo autem, minima quia quidem nostrum **veritatis quibusdam officiis ex?**

## What is this?

### Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, fuga ab? Labore quod sequi, obcaecati unde eaque consectetur sunt? Nam facilis nostrum praesentium, velit accusamus consectetur minima repellat ut eligendi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore animi ut velit suscipit. Ratione illumdolore exercitationem, possimus optio cupiditate modi sunt reprehenderit rem eius provident? Excepturi voluptates esse odio.

## And talking about this.

### Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde dicta quisquam exercitationem molestiae, fugit impedit corrupti temporibus facere culpa dolorum officiis quas, dolores ea neque ducimus.

## But we also can't omit this: 

### Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis voluptatibus ipsa magni eum laborum nobis,nulla ab reprehenderit animi possimus laboriosam quaerat ullam inventore excepturi temporibus praesentium doloribus in. Ulla. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste amet magnam natus, veritatis unde voluptatibus nostrum perferendis? Harum, voluptates temporibus, consectetur aliquid maiores debitis nam distinctio impedit assumenda fuga deserunt!

- The first case
- The second case
- The third case
- And of course this

## And finishing This part.

### Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia esse, quis voluptatem blanditiis quidem accusamus modi odio consequatur laborum voluptas in non cum fugit rerum quasi qui, repellat ipsam iure! Lorem ipsum dolor sit amet consectetur adipisicing elit. Et autem harum earum sit sunt iusto blanditiis id, odit minus voluptatum provident? Laborum consectetur sint eius illo assumenda. Ea, odit autem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas atque ab explicabo iusto tempore, quos reiciendis suscipit similique iure excepturi ratione, qui eius eligendi repellat magnam minus aliquid eos quia?
`  },
          {
            'id': 2, 'msg': `

# Our blog

### Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis earum quod molestiae itaque cupiditate deleniti vitae inventore impedit numquam qui illo autem, minima quia quidem nostrum **veritatis quibusdam officiis ex?**

## What is this?

### Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, fuga ab? Labore quod sequi, obcaecati unde eaque consectetur sunt? Nam facilis nostrum praesentium, velit accusamus consectetur minima repellat ut eligendi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore animi ut velit suscipit. Ratione illumdolore exercitationem, possimus optio cupiditate modi sunt reprehenderit rem eius provident? Excepturi voluptates esse odio.

## And talking about this.

### Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde dicta quisquam exercitationem molestiae, fugit impedit corrupti temporibus facere culpa dolorum officiis quas, dolores ea neque ducimus.

## But we also can't omit this: 

### Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis voluptatibus ipsa magni eum laborum nobis,nulla ab reprehenderit animi possimus laboriosam quaerat ullam inventore excepturi temporibus praesentium doloribus in. Ulla. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste amet magnam natus, veritatis unde voluptatibus nostrum perferendis? Harum, voluptates temporibus, consectetur aliquid maiores debitis nam distinctio impedit assumenda fuga deserunt!

- The first case
- The second case
- The third case
- And of course this

## And finishing This part.

### Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia esse, quis voluptatem blanditiis quidem accusamus modi odio consequatur laborum voluptas in non cum fugit rerum quasi qui, repellat ipsam iure! Lorem ipsum dolor sit amet consectetur adipisicing elit. Et autem harum earum sit sunt iusto blanditiis id, odit minus voluptatum provident? Laborum consectetur sint eius illo assumenda. Ea, odit autem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas atque ab explicabo iusto tempore, quos reiciendis suscipit similique iure excepturi ratione, qui eius eligendi repellat magnam minus aliquid eos quia?
` },
          {
            'id': 3, 'msg': `

# Why we are the best

### Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis earum quod molestiae itaque cupiditate deleniti vitae inventore impedit numquam qui illo autem, minima quia quidem nostrum **veritatis quibusdam officiis ex?**

## What is this?

### Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, fuga ab? Labore quod sequi, obcaecati unde eaque consectetur sunt? Nam facilis nostrum praesentium, velit accusamus consectetur minima repellat ut eligendi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore animi ut velit suscipit. Ratione illumdolore exercitationem, possimus optio cupiditate modi sunt reprehenderit rem eius provident? Excepturi voluptates esse odio.

## And talking about this.

### Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde dicta quisquam exercitationem molestiae, fugit impedit corrupti temporibus facere culpa dolorum officiis quas, dolores ea neque ducimus.

## But we also can't omit this: 

### Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis voluptatibus ipsa magni eum laborum nobis,nulla ab reprehenderit animi possimus laboriosam quaerat ullam inventore excepturi temporibus praesentium doloribus in. Ulla. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste amet magnam natus, veritatis unde voluptatibus nostrum perferendis? Harum, voluptates temporibus, consectetur aliquid maiores debitis nam distinctio impedit assumenda fuga deserunt!

- The first case
- The second case
- The third case
- And of course this

## And finishing This part.

### Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia esse, quis voluptatem blanditiis quidem accusamus modi odio consequatur laborum voluptas in non cum fugit rerum quasi qui, repellat ipsam iure! Lorem ipsum dolor sit amet consectetur adipisicing elit. Et autem harum earum sit sunt iusto blanditiis id, odit minus voluptatum provident? Laborum consectetur sint eius illo assumenda. Ea, odit autem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas atque ab explicabo iusto tempore, quos reiciendis suscipit similique iure excepturi ratione, qui eius eligendi repellat magnam minus aliquid eos quia?
` },
          {
            'id': 4, 'msg': `

# How to join us?

### Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis earum quod molestiae itaque cupiditate deleniti vitae inventore impedit numquam qui illo autem, minima quia quidem nostrum **veritatis quibusdam officiis ex?**

## What is this?

### Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, fuga ab? Labore quod sequi, obcaecati unde eaque consectetur sunt? Nam facilis nostrum praesentium, velit accusamus consectetur minima repellat ut eligendi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore animi ut velit suscipit. Ratione illumdolore exercitationem, possimus optio cupiditate modi sunt reprehenderit rem eius provident? Excepturi voluptates esse odio.

## And talking about this.

### Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde dicta quisquam exercitationem molestiae, fugit impedit corrupti temporibus facere culpa dolorum officiis quas, dolores ea neque ducimus.

## But we also can't omit this: 

### Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis voluptatibus ipsa magni eum laborum nobis,nulla ab reprehenderit animi possimus laboriosam quaerat ullam inventore excepturi temporibus praesentium doloribus in. Ulla. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste amet magnam natus, veritatis unde voluptatibus nostrum perferendis? Harum, voluptates temporibus, consectetur aliquid maiores debitis nam distinctio impedit assumenda fuga deserunt!

- The first case
- The second case
- The third case
- And of course this

## And finishing This part.

### Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia esse, quis voluptatem blanditiis quidem accusamus modi odio consequatur laborum voluptas in non cum fugit rerum quasi qui, repellat ipsam iure! Lorem ipsum dolor sit amet consectetur adipisicing elit. Et autem harum earum sit sunt iusto blanditiis id, odit minus voluptatum provident? Laborum consectetur sint eius illo assumenda. Ea, odit autem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas atque ab explicabo iusto tempore, quos reiciendis suscipit similique iure excepturi ratione, qui eius eligendi repellat magnam minus aliquid eos quia?
` },
        ]
      }
    ]
  }),
  getters: {
    getArticles(state) {
      return state.articles
    },
    getShares(state) {
      if (state.isAuth === false) {
        return "Please authorise to see"
      }
      return "Number of shares: " + state.numberOfShares
    },
    getCurrentSectionId(state) {
      return state.currentSectionId
    },
    getCurrentSectionParts(state) {
      return state.sectionParts[state.currentSectionId]
    },
    getCurrentPartId(state) {
      return state.currentPartId
    },
    getCurrentArticle(state) {
      if (state.currentArticle === '') {
        return state.articles[0].parts[0].msg
      }
      return state.currentArticle
    },
    getInfoForCurrentPart(state) {
      if (state.currentOnPageInfo === '') {
        return state.onPage[0].parts[0].info
      }

      return state.currentOnPageInfo
    },
    getCurrentNavigationHook(state) {
      if (state.currentNavigationHook.length == 0) {
        return state.navigationHooks[0].parts[0]
      }
      return state.currentNavigationHook
    },
  },
  mutations: {
    setCurrentNavigationHooks(state) {
      console.log('article ' + state.currentArticel)
      console.log('part ' + state.currentPartId)
      state.currentNavigationHook = state.navigationHooks[state.currentSectionId].parts[state.currentPartId]
    },
    increaseShares(state) {
      state.numberOfShares += 1

    },
    decreaseShares(state) {
      state.numberOfShares -= 1
    },
    setCurrentSectionId(state, payload) {
      state.currentSectionId = payload
    },
    setCurrentPartId(state, payload) {
      state.currentPartId = payload
    },
    setCurrentArticle(state) {
      state.currentArticle = state.articles[state.currentSectionId].parts[state.currentPartId].msg
    },
    setCurrentPageInfo(state) {
      state.currentOnPageInfo = state.onPage[state.currentSectionId].parts[state.currentPartId].info
    }


  },
  namespaced: true,

}
