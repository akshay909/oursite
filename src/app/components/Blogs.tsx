import Link from 'next/link';
import Image from 'next/image';

export default function Blogs(){

    return(
    <>
    <div className="container-fluid p-5">
    <div className="row d-flex gap-5 flex-column">
    <div className='headcontent pb-3 d-flex justify-content-between'>
              <h2>From the Acssinfo Blog</h2>
              <Link className='fw-bold' href="/" > View More </Link>
    </div>
    </div>

    <div className="row">
    <div className="col-md-4 p-2">
    <Link className='d-flex gap-3 flex-column text-dark ' href="/"> <Image src="/images/tab.png" alt="seo" width={400} height={300} className='m-auto rounded border' />
     <h4>Can You Do SEO Yourself?</h4>
     <span>23 Min Read</span>
     </Link>
    </div>

    <div className="col-md-4 p-2">
    <Link className='d-flex gap-3 flex-column text-dark' href="/"> <Image src="/images/tab.png" alt="develop" width={400} height={300} className='m-auto rounded border' />
     <h4>Can You Do Development Yourself?</h4>
     <span>23 Min Read</span>
     </Link>
    </div>

    <div className="col-md-4 p-2">
    <Link className='d-flex gap-3 flex-column text-dark ' href="/"> <Image src="/images/hombanner.png" alt="strategy" width={400} height={300} className='m-auto border rounded' />
     <h4>Is Your Strategy Ready for 2025? </h4>
     <span>23 Min Read</span>
     </Link>
    </div>

    

    </div>
    </div>
    </>
);
} 