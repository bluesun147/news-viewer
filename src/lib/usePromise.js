import {useState, useEffect} from 'react';
// usePromise.js
export default function usePromise(promiseCreator, deps) {
    // 대기중 / 완료 / 실패에 대한 상태 관리
    // usePromise의 의존 배열 deps를 파라미터로 받아옴
    // 받아온 deps 배열은 useEffect의 의존배열로 설정
    // 의존배열은 useEffect 두번째 파라미터. []
    const [loading, setLoading] = useState(false);
    const [resolved, setResolved] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => { // 렌더링될때마다 실행
        const process = async() => {
            setLoading(true); // loading을 true로
            try {
                const resolved = await promiseCreator();
                setResolved(resolved);
            } catch (e) {
                setError(e);
            }
            setLoading(false); // 끝나면 loading값 false로
        };
        process();
    }, deps);

    return [loading, resolved, error];
}