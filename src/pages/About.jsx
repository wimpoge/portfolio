import { JS, React, Next, Bootstrap, Tailwind, MUI } from '../assets/index'

const About = () => {

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h1 >
          Tentang Saya
        </h1>
        <span className="about-1">22 Tahun / Lulusan Baru</span>
      </div>

      <div className="about-container">
        <div>
          <div>
            Saya adalah lulusan dari Universitas Gunadarma. Saya berasal dari jurusan Sistem Komputer. Saya tertarik dengan pemrograman web, arduino dan jaringan. Saya juga suka manga, anime dan webtoon.
          </div>
        </div>

        <div>
          <h2>Pengalaman</h2>

          <div className='about-stepper'>
            <li>
              2017
              <div className='about-stepper_line'>
                (Magang) PT. Sewiwi Indonesia
              </div>
            </li>
            <li>
              2020 - 2022
              <div className='about-stepper_line'>
                Programmer di Laboratorium Psikologi
                <div style={{ padding: '5px' }}>
                  <img src='https://media-exp1.licdn.com/dms/image/C4D2DAQGmKik6oKJXZQ/profile-treasury-image-shrink_800_800/0/1654329346181?e=1664553600&v=beta&t=TW0PgXYkBwpZh_Gs6_YevBUmtG5sh5ONiXb0yicXjcY' alt='sertif-1' width='100px' /><span> </span>
                  <img src='https://media-exp1.licdn.com/dms/image/C4D2DAQE4wHmk2nIFTA/profile-treasury-image-shrink_800_800/0/1654329366952?e=1664553600&v=beta&t=nXkxW9DjR1m6ms7VBWAkkrpH8frSLvo1MMUzaqg-U6A' alt='sertif-2' width='95px' /><span> </span>
                  <img src='https://media-exp1.licdn.com/dms/image/C4D2DAQHBpKz6wVhtHg/profile-treasury-image-shrink_800_800/0/1654329176823?e=1664553600&v=beta&t=14v1oK7FAg2B2fNrihuN6diHYev6TfS0UA8a1k6yXF0' alt='sertif-3' width='100px' />
                </div>
              </div>
            </li>
          </div>
        </div>

        <div>
          <h2>Pendidikan</h2>
          <div className='about-stepper' >
            <li>
              2015 - 2017
              <div className='about-stepper_line'>
                SMK AL-HASRA (TKJ)
              </div>
            </li>
            <li>
              2018 - 2022
              <div className='about-stepper_line'>
                Universitas Gunadarma
              </div>
            </li>
          </div>
        </div>

        <div className="about-list">
          <h2>Teknologi yang pernah saya gunakan</h2>
          <li>
            <img src={JS} alt="JS" title="JS" />
            <img src={React} className="About-logo" alt="React JS" title="React JS" />
            <img src={Next} alt="Next JS" title="Next JS" />
          </li>
          <li>
            <img src={Bootstrap} alt="Bootstrap" title="Bootstrap" />
            <img src={Tailwind} alt="Tailwind" title="Tailwind" />
            <img src={MUI} alt="MUI" title="MUI" />
          </li>
        </div>

      </div>
    </div>
  )
}

export default About