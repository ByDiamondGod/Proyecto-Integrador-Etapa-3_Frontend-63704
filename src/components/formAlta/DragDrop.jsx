/* eslint-disable react/prop-types */
import { post } from '../../utils/http'
import './DragDrop.scss'

const DragDrop = ({ setFoto, srcImagen, setSrcImagen }) => {

  // ! Cancelando comportamiento por defecto del navegador
  const arrayEventos = ['dragenter', 'dragleave', 'dragover', 'drop']

  arrayEventos.forEach(eventName => {
    document.body.addEventListener(eventName, e => e.preventDefault())
  })

  const handleDrop = e => {
    // console.log(e)
    const dataTransfer = e.dataTransfer
    const files = dataTransfer.files
    // console.log(files)
    handleFiles(files) // promesa
  }

  const handleChange = e => {
    // console.log(e)
    const files = e.target.files
    //console.log(files)
    handleFiles(files) // promesa
  }

  const handleFiles = async files => {
    try {
      const file = files[0]
      await uploadFile(file)
      previewFile(file)
    } catch (error) {
      console.error('[handleFiles]:', error)
    }
  }

  const previewFile = file => {
    const reader = new FileReader()
    reader.readAsDataURL(file)

    reader.addEventListener('loadend', () => {
      setSrcImagen(reader.result)
    })
  }

  const uploadFile = async file => {
    const formData = new FormData()

    try {
      formData.append('foto', file)

      const url = import.meta.env.VITE_URL_UPLOAD

      const imagenUp = await post(url, formData)
      setFoto(imagenUp)
    } catch (error) {
      console.error('[uploadFile]:', error)
    }

  }


  return (
    <div className='drop-area' onDrop={handleDrop}>

        <p>Arrastra y suélta</p>

        <div className='drop-area-image'>
            <img src={srcImagen} alt="" />
        </div>

        <input type="file" id="lbl-foto" accept="image/*" onChange={handleChange} />
        <label className="drop-area-button" htmlFor="lbl-foto">
            Seleccionar
        </label>

    </div>
  )
}

export default DragDrop