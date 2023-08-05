import m1 from '../../assets/img/merch/merch1.svg'
import m2 from '../../assets/img/merch/merch2.svg'
import m3 from '../../assets/img/merch/merch3.svg'
import m4 from '../../assets/img/merch/merch4.svg'
import m5 from '../../assets/img/merch/merch5.svg'

const MerchCards = () => {
    return (
        <div className='flex gap-16 flex-wrap justify-center items-center my-16'>
            <img src={m1} />
            <img src={m2} />
            <img src={m3} />
            <img src={m4} />
            <img src={m5} />
        </div>
    )
}

export default MerchCards