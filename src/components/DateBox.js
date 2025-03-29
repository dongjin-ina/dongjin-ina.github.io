import Countdown from "react-countdown";
// import calFrame from "../icons/cal_frame.png";
import calTitle from "../icons/cal_title.png";
import calNyang from "../icons/cal_nyang.png";
import RevealOnce from "./RevealOnce";

const weddingDate = new Date("2025-05-24T11:00:00");

const CountdownRenderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return <div className="countdown">축하해주신 모든 분들께 감사합니다.</div>;
  } else {
    let TimeText = null;
    if (days > 0) {
      TimeText = (
        <span>
          <span className="fontRed fontEmp">{days}</span>일
        </span>
      );
    } else if (hours > 0) {
      TimeText = (
        <span>
          <span className="fontRed fontEmp">{hours}</span>시간
        </span>
      );
    } else if (minutes > 0) {
      TimeText = (
        <span>
          <span className="fontRed fontEmp">{minutes}</span>분
        </span>
      );
    } else {
      TimeText = (
        <span>
          <span className="fontRed fontEmp">{seconds}</span>초
        </span>
      );
    }
    return (
      <div className="countdown">
        <span className="fontEmp">동진</span> <span className="fontRed">♥</span>{" "}
        <span className="fontEmp">인아</span>의 결혼식이 {TimeText} 남았습니다.
      </div>
    );
  }
};
const MyCal = () => {
  return (
    <div className="cal">
      <div className="fontRed">일</div>
      <div>월</div>
      <div>화</div>
      <div>수</div>
      <div>목</div>
      <div>금</div>
      <div>토</div>
      <div className="fontRed"></div>
      <div></div>
      <div></div>
      <div></div>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div className="fontRed">4</div>
      <div className="fontRed">5</div>
      <div className="fontRed">6</div>
      <div>7</div>
      <div>8</div>
      <div>9</div>
      <div>10</div>
      <div className="fontRed">11</div>
      <div>12</div>
      <div>13</div>
      <div>14</div>
      <div>15</div>
      <div>16</div>
      <div>17</div>
      <div className="fontRed">18</div>
      <div>19</div>
      <div>20</div>
      <div>21</div>
      <div>22</div>
      <div>23</div>
      <div className="wedding-date">24</div>
      <div className="fontRed">25</div>
      <div>26</div>
      <div>27</div>
      <div>28</div>
      <div>29</div>
      <div>30</div>
      <div>31</div>
    </div>
  );
};

const DateBox = () => {
  return (
    <RevealOnce className="date-box">
      <img className="cal-title" src={calTitle} alt="" />
      <img className="cal-nyang" src={calNyang} alt="" />
      <MyCal />
      <Countdown date={weddingDate} renderer={CountdownRenderer} />
    </RevealOnce>
  );
};

export default DateBox;
