import React, { useEffect, useState } from 'react'
import './Tos.css'
import { getTos } from '../../utils/strapi-cms';
import Markdown from 'react-markdown';

const Tos = () => {
  const [tos, setTos] = useState();
  useEffect(() => {
    const fetchTos = async () => {
      const tosData = await getTos();
      console.log(tosData)
      setTos(tosData)
    }
    fetchTos();
  },[])
    const wrapDema = (text) => {
        return text.replace(
          /\b(d)(e)(m)(a)\b/gi,
          '<span class="title-dema">$1<span class="title-blue">$2</span>$3$4</span>'
        );
      };
  return (
    <section className='tos-section section-padding fixed-width'>
        <h1 className='tos-heading' >Terms of Service</h1>
        {tos && tos.data && tos.data.map((tos, index) => (
          <div>
            {tos.attributes.title && (
            <h2 className='tos-title'>{tos.attributes.title}</h2>
            )}
            <Markdown className="tos-body">{tos.attributes.body}</Markdown>
          </div>
        ))}
    </section>
  )
}

export default Tos