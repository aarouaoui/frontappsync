export const OnCreateCard = `subscription OnCreateCard {
    newCard {
        author
        content
        id
        live
        publicationDate
        title
        type
    }
  } `