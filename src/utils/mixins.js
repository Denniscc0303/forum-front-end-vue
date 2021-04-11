import moment from 'moment'

export const fromNowFilter = {
  filters: {
    fromNow(datetime) {
      return datetime ? moment(datetime).fromNow() : '-'
    },
  }
}

export const emptyImageFilter = {
  filters: {
    emptyImage(value) {
      return value ? value : 'https://picsum.photos/100/100'
    }
  }
}
