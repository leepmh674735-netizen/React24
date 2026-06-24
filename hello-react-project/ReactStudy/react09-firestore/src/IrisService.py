# Iris Service for flower classification
import joblib
import pandas as pd

def predict(data):
    # This is a template for Iris model prediction.
    # When you have the model files, you can load them:
    #
    # ec = joblib.load("/model/iris_encode_columns.joblib")
    # scaler = joblib.load("/model/iris_scaler.joblib")
    # model = joblib.load("/model/iris_model.joblib")
    #
    # d = pd.DataFrame([data])
    # d = ec.transform(d)
    # return model.predict(d)
    
    print("Predicting Iris with data:", data)
    return "Iris prediction template result"
