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
final_svm_model = pickle.load(open('ml/models/saved_final_nb_model.pkl', 'rb'))
final_nb_model = pickle.load(open('ml/models/saved_final_rf_model.pkl', 'rb'))
final_rf_model = pickle.load(open('ml/models/saved_final_svm_model.pkl', 'rb'))

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
	# for i in range(0,len(symptoms)):
	# 	if i==len(symptoms)-1:
	# 		s=symptoms[i]
	# 		ss=s[0:len(s)-2]
			
	# 		symptoms[i]=ss
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
	predictions = [
		rf_prediction,
		nb_prediction,
		nb_prediction,
		final_prediction
	]
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
# val=(predictDisease("Itching,Anxiety,High Fever\r\n"))

# ss=sys.argv[1].strip("\n","\r")
# ss=ss.replace("\n","")
# ss=ss.replace("\r","")

ss=sys.argv[1]
print(predictDisease(ss))

# li=ss.strip(',')
# for i in range(0,len(li)):
# 	if i==len(li)-1:
# 		s=li[i]
# 		ele1=s[0:len(s)-2]
# 		ele2=s[len(s)-2:]
# 		li[i]=ss
# print(ele2+"\r\n")
# print(ss)
# print(predictDisease(ss))

# val=sys.argv[1]
# ss=val[0:len(val)-4]
# print(ss)

# print({"hello":1})
# print(sys.argv)