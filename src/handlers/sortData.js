export const sortDataHandler =(data, setData) => {
const sortData = data.sort((a,b) => {
          const nameA = a.name.common.toLowerCase()
          const nameB = b.name.common.toLowerCase()

          if(nameA <nameB) return -1
          if(nameA > nameB) return 1

          return 0
        })
        setData(sortData);
}