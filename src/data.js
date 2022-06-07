export const taskLists = [
  {
    id: 1,
    position: 0,
    label: 'A faire',
    color: {
      header: '$blue',
      content: '$red'
    },
    tasks: [
      {
        id: 10,
        label: "ceci est une tache",
        color: '$white',
        tags: [{ id: "djzqiho", label: "tag1", color: "#fff" }],
        picture:
          "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x300/acf5be3f99e4b0e667869b2f75593ab0/photo-1650892344024-fb34a919e258.jpg",
        checkList: {
          done: [{}],
          todo: [{}, {}],
        },
      },
      {
        id: 11,
        label: "ceci est une tache",
        color: '$white',
        tags: [{ id: "ioazdqn", label: "tag1", color: "#fff" }],
        checkList: {
          done: [{}],
          todo: [{}, {}],
        },
      },
    ],
  },
  {
    id: 2,
    position: 1,
    label: 'En cour',
    color: {
      header: '$white',
      content: '$white'
    },
    tasks: [
      {
        id: 21,
        label: "ceci est une tache",
        color: '$white',
        tags: [{ id:"duzaiydzai", label: "tag1", color: "#FF5E5E" },{ id:"dzadaziudhnj", label: "tag2", color: "#fff" }],
        checkList: {
          done: [{}],
          todo: [{}, {}],
        },
      },
      {
        id: 20,
        label: "ceci est une tache",
        color: '$white',
        tags: [{id:"dhuziadazy", label: "tag1", color: "#fff" }],
        picture:
          "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x300/acf5be3f99e4b0e667869b2f75593ab0/photo-1650892344024-fb34a919e258.jpg",
        checkList: {
          done: [{}],
          todo: [{}, {}],
        },
      },
      {
        id: 22,
        label: "ceci est une tache",
        color: '$white',
        tags: [{id:"yuzeiaoyezaib", label: "tag1", color: "#fff" }],
        picture:
          "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x300/acf5be3f99e4b0e667869b2f75593ab0/photo-1650892344024-fb34a919e258.jpg",
        checkList: {
          done: [{}],
          todo: [{}, {}],
        },
      },
    ],
  },
];
