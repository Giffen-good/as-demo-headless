const setMeta = (meta) => {
  return useMeta({
    title: computed(() => meta.title),
    meta: [
      {
        name: `description`,
        content: computed(() => meta.description),
      },
    ],
  })
}
const init = (store) => {
  setMeta(store.state.meta)
}
export default init
