import joblib
import pandas as pd

def m1(data):
    ec = joblib.load("/model/encode_columns.joblib")
    scaler = joblib.load("/model/scaler.joblib")
    model = joblib.load("/model/model.joblib")

    d = pd.DataFrame([data])

    # 원본 객체를 변환된 데이터프레임으로 업데이트
    d = ec.transform(d)
    print(d)