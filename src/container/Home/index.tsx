import { useEffect, useState } from 'react';
import { Divider, Modal } from 'antd';
import './home.scss';

// eslint-disable-next-line
const answerList: any = {
  1: 'donkey',
  2: 'goat',
  3: 'killer',
  4: 'snake',
  5: 'bat',
  6: 'ghost',
  7: 'good',
  8: 'bad',
};

const HomeContainer = (): JSX.Element => {
  const [clr, setClr] = useState('');
  // const [nmb, setNmb] = useState(0);
  const [clrList, setClrList] = useState<string[]>([]);
  const [resetGame, setResetGame] = useState<boolean>(false);

  const onColorDivClick = (e: string): void => {
    setClr(e);
  };

  const onNumberChange = (e: number): void => {
    // setNmb(e);
    Modal.info({
      icon: '',
      title: <div className="txtfnt">YOU ARE A</div>,
      okText: 'Next Chance',
      maskStyle: { backgroundColor: 'black' },
      centered: true,
      content: (
        <div className="callout">
          <img src={`./assets/images/${answerList[e]}.jpg`} />
          <h1 className="callout-title animate__animated animate__flip">{answerList[e]}</h1>
        </div>
      ),
      onOk() {
        setResetGame(!resetGame);
        setClr('');
        // setNmb(0);
      },
    });
  };

  useEffect(() => {
    const colorList: string[] = [];
    for (let i = 0; i < 8; i++) {
      colorList.push(`#${((Math.random() * 0xffffff) << 0).toString(16)}`);
    }
    setClrList(colorList);
  }, [resetGame]);
  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-5">
            <div className="square-grid">
              {clrList.map((el: string) => (
                <div
                  onClick={() => onColorDivClick(el)}
                  key={el}
                  role="button"
                  style={{ backgroundColor: el, width: 100, padding: 50 }}></div>
              ))}
            </div>
          </div>
          <div className="col-7">
            <div className="txtfnt animate__animated animate__flash animate__repeat-3">
              Tipi tipi tip top, which color do you want ?
            </div>
          </div>
        </div>
        <Divider />
        {clr && (
          <div className="row">
            <div className="col-5">
              <div className="square-grid">
                {clrList.map((el: string, i: number) => (
                  <div
                    onClick={() => onNumberChange(i + 1)}
                    key={el}
                    className="border text-center p-4"
                    role="button">
                    <strong style={{ fontSize: 30 }}>{i + 1}</strong>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-7">
              <div
                className="txtfnt animate__animated animate__flash animate__repeat-3"
                style={{ color: clr }}>
                Tipi tipi tip top, which number do you want ?
              </div>
            </div>
          </div>
        )}
        {/* {!!nmb && (
          <div className="mt-2 justify-content-center">
            <div className="d-grid gap-2">
              <h1 className="btn btn-success btn-lg">{answerList[nmb]}</h1>
              <button
                className="btn btn-warning btn-lg"
                type="button"
                onClick={() => {
                  setClr('');
                  setNmb(0);
                }}>
                New Game
              </button>
            </div>
          </div>
        )} */}
      </div>
    </>
  );
};

export default HomeContainer;
