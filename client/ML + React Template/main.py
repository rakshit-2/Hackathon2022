# Importing libraries
import numpy as np
import pandas as pd
from scipy.stats import mode
import warnings
import pickle
from sklearn.preprocessing import LabelEncoder
import sys

# Ignoring Warnings
warnings.filterwarnings("ignore")

# Loading Saved Models
final_svm_model = pickle.load(open('ml/models/saved_final_svm_model.pkl', 'rb'))
final_nb_model = pickle.load(open('ml/models/saved_final_nb_model.pkl', 'rb'))
final_rf_model = pickle.load(open('ml/models/saved_final_rf_model.pkl', 'rb'))

# Reading Training dataset
DATA_PATH = "ml/dataset/training.csv"
data = pd.read_csv(DATA_PATH).dropna(axis = 1)

encoder = LabelEncoder()
data["prognosis"] = encoder.fit_transform(data["prognosis"])

X = data.iloc[:,:-1]
y = data.iloc[:, -1]


symptoms = X.columns.values

# Creating a symptom index dictionary to encode the
# input symptoms into numerical form
symptom_index = {}
for index, value in enumerate(symptoms):
	symptom = " ".join([i.capitalize() for i in value.split("_")])
	symptom_index[symptom] = index

data_dict = {
	"symptom_index":symptom_index,
	"predictions_classes":encoder.classes_
}

def predictDisease(symptoms):
	symptoms = symptoms.split(",")
	
	# creating input data for the models
	input_data = [0] * len(data_dict["symptom_index"])
	for symptom in symptoms:
		index = data_dict["symptom_index"][symptom]
		input_data[index] = 1
		
	# reshaping the input data and converting it
	# into suitable format for model predictions
	input_data = np.array(input_data).reshape(1,-1)
	
	# generating individual outputs
	rf_prediction = data_dict["predictions_classes"][final_rf_model.predict(input_data)[0]]
	nb_prediction = data_dict["predictions_classes"][final_nb_model.predict(input_data)[0]]
	svm_prediction = data_dict["predictions_classes"][final_svm_model.predict(input_data)[0]]
	
	# making final prediction by taking mode of all predictions
	final_prediction = mode([rf_prediction, nb_prediction, svm_prediction])[0][0]
	predictions = {
		"rf_model_prediction": rf_prediction,
		"naive_bayes_prediction": nb_prediction,
		"svm_model_prediction": nb_prediction,
		"final_prediction":final_prediction
	}
	return predictions

# prediction = predictDisease(str(sys.argv[1]))
# for key, value in prediction.items():
#     with open('output.txt', 'a') as f:
#         f.write(str(key) + ':' + str(value) + '\n')
    # print(key+)
# ans = ''
# for key, value in prediction.items():
#     ans 
# # Testing the function
# print(predictDisease(str(sys.argv[1])))
# print(predictDisease("Itching,Anxiety,High Fever"))
print(predictDisease(str(sys.argv[1])))