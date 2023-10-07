export const getActivityId = (name, activity) => {
  switch (name) {
    case 'nepal': {
      switch (activity) {
        case 'adventure activities': {
          return 36;
        }
        case 'expedition': {
          return 35;
        }
        case 'jungle safari': {
          return 34;
        }
        case 'peak climbing': {
          return 32;
        }
        case 'tour': {
          return 33;
        }
        case 'trekking': {
          return 31;
        }
        default: {
          return notFound();
        }
      }
    }
    default: {
      return notFound();
    }
  }
}