import logo from '../../../../assets/logo.png';
import NewDM from './components/new-dm';
import ProfileInfo from './components/profile-info';

const ContactsContainer = () => {
  return (
    <div className="relative w-full md:w-[35vw] lg:w-[30vw] xl:w-[20vw] bg-[#1b1c24] border-r-2 border-[#2f303b]">
      <div className="-mt-6 p-4 md:p-3">
        <Logo />
      </div>  
      <div className="-mt-5">
        <div className="flex items-center justify-between pr-10">
            <Title text="Direct Messages"/>
            <NewDM />
        </div>
      </div>
      <div className="mt-4">
        <div className="flex items-center justify-between pr-10">
            <Title text="Channels"/>
        </div>
      </div>
      <ProfileInfo />
    </div>
  )
}

export const Logo = () => {
  return (
    <div className="flex justify-start items-center -mt-2">
      <img 
        src={logo}
        alt="Whispy Logo"
        className="w-[180px] sm:w-[200px] md:w-[160px] lg:w-[140px] xl:w-[120px] object-contain"
      />
    </div>
  );
};

const Title = ({ text }) => {
    return (
        <h6 className='-mt-2 uppercase tracking-widest text-neutral-400 pl-10 font-light text-opacity-90 text-sm'>{text}</h6>
    )
}

export default ContactsContainer;