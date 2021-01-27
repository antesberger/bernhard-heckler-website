type Props = {
  active: boolean
  inverted: boolean
  onClick: () => void
}
export default function Burger({ active, inverted, onClick }: Props) {
  return (
    <div className={'container ' + (active ? 'active' : '')} onClick={onClick}>
      <div className={'meat meat-1'} />
      <div className={'meat meat-2'} />
      <div className={'meat meat-3'} />
      <style jsx>
        {`
          .container {
            position: relative;
            z-index: 2;
            cursor: pointer;
            width: 24px;
            height: 24px;
            display: flex;
            justify-content: center;
            items: center;
          }
          .meat {
            position: absolute;
            width: 28px;
            height: 2px;
            background: ${inverted || active ? 'black' : 'white'};
            transition: all 150ms ease-in;
          }
          .meat-1 {
            transform: translateY(0px);
          }
          .meat-2 {
            transform: translateY(10px);
          }
          .meat-3 {
            transform: translateY(20px);
          }
          .active .meat-1 {
            transform: translateY(10px) rotate(45deg);
          }
          .active .meat-2 {
            opacity: 0;
          }
          .active .meat-3 {
            transform: translateY(10px) rotate(-45deg);
          }

          @media (min-width: 769px) {
            .container {
              display: none;
            }
          }
        `}
      </style>
    </div>
  )
}
