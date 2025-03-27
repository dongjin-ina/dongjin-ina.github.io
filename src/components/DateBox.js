import Countdown from "react-countdown";
import calFrame from "../icons/cal_frame.png";
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
          <span className="fontRed">{days}</span>일
        </span>
      );
    } else if (hours > 0) {
      TimeText = (
        <span>
          <span className="fontRed">{hours}</span>시간
        </span>
      );
    } else if (minutes > 0) {
      TimeText = (
        <span>
          <span className="fontRed">{minutes}</span>분
        </span>
      );
    } else {
      TimeText = (
        <span>
          <span className="fontRed">{seconds}</span>초
        </span>
      );
    }
    return (
      <div className="countdown">
        <div>
          동진 <span className="fontRed">♥</span> 인아의 결혼식이
        </div>
        <div>{TimeText} 남았습니다.</div>
      </div>
    );
  }
};
const MyCal = () => {
  return (
    <div className="cal">
      <table>
        <thead>
          <tr>
            <td>일</td>
            <td>월</td>
            <td>화</td>
            <td>수</td>
            <td>목</td>
            <td>금</td>
            <td>토</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
          </tr>
          <tr>
            <td>4</td>
            <td className="fontRed">5</td>
            <td className="fontRed">6</td>
            <td>7</td>
            <td>8</td>
            <td>9</td>
            <td>10</td>
          </tr>
          <tr>
            <td>11</td>
            <td>12</td>
            <td>13</td>
            <td>14</td>
            <td>15</td>
            <td>16</td>
            <td>17</td>
          </tr>
          <tr>
            <td>18</td>
            <td>19</td>
            <td>20</td>
            <td>21</td>
            <td>22</td>
            <td>23</td>
            <td>
              <div className="wedding-date">24</div>
            </td>
          </tr>
          <tr>
            <td>25</td>
            <td>26</td>
            <td>27</td>
            <td>28</td>
            <td>29</td>
            <td>30</td>
            <td>31</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const DateBox = () => {
  return (
    <RevealOnce className="date-box">
      <img src={calFrame} alt="달력" />
      <div className="cal-title">5월</div>
      <MyCal />
      <Countdown date={weddingDate} renderer={CountdownRenderer} />
    </RevealOnce>
  );
};

export default DateBox;
