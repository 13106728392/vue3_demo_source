export default function sameVnode(vnode1, vnode2) {
    return (
      (vnode1.data ? vnode1.data.key : undefined) ===
        (vnode2.data ? vnode2.data.key : undefined) && vnode1.sel === vnode2.sel
    )
  }
  
